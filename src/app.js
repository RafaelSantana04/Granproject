const express = require('express');
const routes = require('./routes');
const sequelize = require('./models/index');

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Usar as rotas
app.use(routes);

// Sincronizar o banco de dados e iniciar o servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
  });
});
