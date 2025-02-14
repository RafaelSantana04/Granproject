const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Produto = require('./Produto');
const Fornecedor = require('./Fornecedor');

// Relação muitos-para-muitos entre Produto e Fornecedor
const Associacao = sequelize.define('Associacao', {
  produtoId: {
    type: DataTypes.INTEGER,
    references: {
      model: Produto,
      key: 'id',
    },
  },
  fornecedorId: {
    type: DataTypes.INTEGER,
    references: {
      model: Fornecedor,
      key: 'id',
    },
  },
});

Produto.belongsToMany(Fornecedor, { through: Associacao });
Fornecedor.belongsToMany(Produto, { through: Associacao });

module.exports = Associacao;
