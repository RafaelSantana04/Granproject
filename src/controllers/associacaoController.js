const Associacao = require('../models/Associacao');

// Associar um produto a um fornecedor
exports.create = async (req, res) => {
  try {
    const associacao = await Associacao.create(req.body);
    res.status(201).json(associacao);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Listar todas as associações
exports.findAll = async (req, res) => {
  try {
    const associacoes = await Associacao.findAll();
    res.status(200).json(associacoes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Outras operações (desassociar, buscar por produto/fornecedor) podem ser adicionadas aqui.
