const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const fornecedorController = require('../controllers/fornecedorController');
const associacaoController = require('../controllers/associacaoController');

// Rotas para Produto
router.post('/produtos', produtoController.create);
router.get('/produtos', produtoController.findAll);

// Rotas para Fornecedor
router.post('/fornecedores', fornecedorController.create);
router.get('/fornecedores', fornecedorController.findAll);

// Rotas para Associação
router.post('/associacoes', associacaoController.create);
router.get('/associacoes', associacaoController.findAll);

module.exports = router;
