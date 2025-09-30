const express = require('express');
const router = express.Router();
const { cadastrarCliente, listarClientes, exibirTelaCadastro, exibirTelaAlugarBike, alugarBike } = require('../services/clienteServices');

router.get('/cadastrar', exibirTelaCadastro);
router.post('/cadastrar', cadastrarCliente);
router.get('/clientes', listarClientes);

router.get('/alugarBike/:bike_codigo', exibirTelaAlugarBike)
router.post('/alugarBike/:bike_codigo', alugarBike);

module.exports = router;