const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Fornecedor = sequelize.define('Fornecedor', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cnpj: {
    type: DataTypes.STRING,
    unique: true,
  },
  endereco: {
    type: DataTypes.STRING,
  },
  contato: {
    type: DataTypes.STRING,
  },
});

module.exports = Fornecedor;
