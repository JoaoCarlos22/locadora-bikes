// array de bikes (simulando um banco de dados)
bikes = [];

exports.teste = async (req, res) => {
    res.render('home')
}

// Lógica para cadastrar uma bike localmente
exports.cadastrarBike = async (req, res) => {
    try {
        const {cor, marca, modelo, observacao} = req.body;

        if (!cor || !marca || !modelo || !observacao) {
            return res.status(400).json({ error: 'Cor, marca, modelo e observação são obrigatórios.' });
        }
        const novaBike = {
            id: bikes.length + 1,
            cor,
            marca,
            modelo,
            observacao
        };
        bikes.push(novaBike);
        res.redirect('/bicicleta/bicicletas');
    } catch (error) {
        console.error('Erro ao cadastrar a bicicleta:', error);
        res.status(500).send('Erro ao cadastrar a bicicleta\n\n', error);
    }
}

// Lógica para listar todas as bikes cadastradas
exports.listarBikes = async (req, res) => {
    try {
        res.render('bikes', { bikes });
    } catch (error) {
        res.status(500).send('Erro ao listar as bicicletas\n\n', error);
    }
}

exports.exibirTelaCadastro = async (req, res) => {
    res.render('cadastrarBike');
}

exports.bikesAlugadas = async (req, res) => {
    try {
        // filtra as bikes alugadas
        const bikesAlugadas = bikes.filter(b => b.observacao.startsWith('Alugada'));

        if (bikesAlugadas.length === 0) {
            res.status(200).send('Nenhuma bicicleta alugada.');
        }
        res.render('bikesAlugadas', { bikes: bikesAlugadas });
    } catch (error) {
        res.status(500).send('Erro ao listar as bicicletas alugadas\n\n', error);
    }
}

exports.bikesDisponiveis = async (req, res) => {
    try {
        // filtra as bikes disponíveis
        const bikesDisponiveis = bikes.filter(b => b.observacao.startsWith('Disponível'));

        res.render('bikesDisponiveis', { bikes: bikesDisponiveis });
    } catch (error) {
        res.status(500).send('Erro ao listar as bicicletas disponíveis\n\n', error);
    }
}