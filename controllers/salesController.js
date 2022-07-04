const SalesService = require('../services/salesService');

const getAll = async (req, res) => {
  try {
    const result = await SalesService.getAll();
    if (!result) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro interno no Servidor' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await SalesService.getById(id);
    if (!result) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro interno no Servidor' });
  }
};

const create = async (req, res) => {
  try {
    const arrSales = req.body;
    const result = await SalesService.create(arrSales);
    return res.status(201).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro interno no Servidor' });
  }
};

module.exports = { getAll, getById, create };