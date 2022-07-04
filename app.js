const express = require('express');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação

const bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const ProductsController = require('./controllers/productsController');
const SalesController = require('./controllers/salesController');
const Auth = require('./middlewares/auth');

app.get('/products', ProductsController.getAll);
app.get('/products/:id', ProductsController.getById);
app.post('/products', Auth.name, ProductsController.create);
app.put('/products/:id', Auth.name, Auth.isProductValid, ProductsController.att);
app.delete('/products/:id', Auth.isProductValid, ProductsController.fnDelete);

app.get('/sales', SalesController.getAll);
app.get('/sales/:id', SalesController.getById);
app.post('/sales', Auth.salesInfo, SalesController.create);

module.exports = app;