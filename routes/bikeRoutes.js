const express = require('express');
const router = express.Router();
const { teste, cadastrarBike, listarBikes, exibirTelaCadastro, bikesAlugadas } = require('../services/bikeServices');

router.get('/', teste);

router.get('/cadastrar', exibirTelaCadastro)
router.post('/cadastrar', cadastrarBike);
router.get('/bicicletas', listarBikes);
router.get('/alugadas', bikesAlugadas);

module.exports = router;