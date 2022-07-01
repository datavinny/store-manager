const SalesService = require('../services/salesService');

const create = async (req, res) => {
  try {
    const arrSales = req.body;
    console.log('req.body', req.body);
    const result = await SalesService.create(arrSales);
    return res.status(201).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro interno no Servidor' });
  }
};

module.exports = { create };