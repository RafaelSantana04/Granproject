const Produto = require('../models/Produto');

// Criar um novo produto
exports.create = async (req, res) => {
  try {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Listar todos os produtos
exports.findAll = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.status(200).json(produtos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Outras operações (atualizar, deletar, buscar por ID) podem ser adicionadas aqui.
