const SalesService = require('../services/salesService');

const create = async (req, res) => {
  try {
    const arrSales = req.body;
    const result = await SalesService.create(arrSales);
    return res.status(201).send(result);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Erro interno no Servidor' });
  }
};

module.exports = { create };