const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  codigoBarras: {
    type: DataTypes.STRING,
    unique: true,
  },
});

module.exports = Produto;
