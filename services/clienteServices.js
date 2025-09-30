const bikes = require('./bikeServices');

// array de clientes (simulando um banco de dados)
let clientes = [];

// Lógica para cadastrar um cliente localmente
exports.cadastrarCliente = async (req, res) => {
    try {
        const { nome, cpf, fone, email } = req.body;
        const foto = req.file.foto;

        if (!nome || !cpf || !fone || !email || !foto) {
            res.redirect('/?msg=erro');
        }
        foto.mv(__dirname + '/imagens/' + foto.name);

        const novoCliente = {
            id: clientes.length + 1,
            nome,
            cpf,
            fone,
            email,
            foto: foto.name
        };

        clientes.push(novoCliente);
        res.redirect('/cliente/clientes');
    } catch (error) {
        console.error('Erro ao cadastrar o cliente:', error);
        res.status(500).send('Erro ao cadastrar o cliente\n\n', error);
    }
}

exports.listarClientes = async (req, res) => {
    try {
        res.render('clientes', { clientes });
    } catch (error) {
        res.status(500).send('Erro ao listar os clientes\n\n', error);
    }
}

exports.exibirTelaCadastro = async (req, res) => {
    res.render('cadastrarCliente');
}

exports.exibirTelaAlugarBike = async (req, res) => {
    res.render('alugarBike', { bike_id: req.params.bike_id, clientes });
}

exports.alugarBike = async (req, res) => {
    try {
        const { cliente_id, data_saida, data_retorno } = req.body;
        const { bike_codigo } = req.params;

        // verifica se o cliente existe
        const cliente = clientes.find(c => c.id === parseInt(cliente_id));
        if (!cliente) {
            return res.status(404).send('Cliente não encontrado.');
        }

        // verifica se a bicicleta existe
        const bike = bikes.find(b => b.id === parseInt(bike_codigo));
        if (!bike) {
            return res.status(404).send('Bicicleta não encontrada.');
        }

        // atualiza a observação da bicicleta
        bike.observacao = `Alugada por ${cliente.nome} de ${data_saida} até ${data_retorno}`;

        res.redirect('/bicicleta/alugadas');
    } catch (error) {
        res.status(500).send('Erro ao alugar a bicicleta\n\n', error);
    }
}