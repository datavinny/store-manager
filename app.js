const express = require('express');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação

const productsController = require('./controllers/productsController');

app.get('/products', productsController.getAll);

app.get('/products/:id', productsController.getById);

module.exports = app;