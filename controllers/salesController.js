const SalesService = require('../services/salesService');
const messageNstatus = require('../helpers/messageNstatus');

const getAll = async (req, res) => {
  try {
    const result = await SalesService.getAll();
    if (!result) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(messageNstatus.serverErro.status).json(messageNstatus.serverErro.message);
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
    return res.status(messageNstatus.serverErro.status).json(messageNstatus.serverErro.message);
  }
};

const create = async (req, res) => {
  try {
    const arrSales = req.body;
    const result = await SalesService.create(arrSales);
    return res.status(201).json(result);
  } catch (error) {
    console.error(error);
    return res.status(messageNstatus.serverErro.status).json(messageNstatus.serverErro.message);
  }
};

const fnDelete = async (req, res) => {
  try {
    const { id } = req.params;
    await SalesService.fnDelete(id);
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(messageNstatus.serverErro.status).json(messageNstatus.serverErro.message);
  }
};

const att = async (req, res) => {
  try {
    const { id } = req.params;
    const arrSales = req.body;
    const result = await SalesService.att(id, arrSales);
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(messageNstatus.serverErro.status).json(messageNstatus.serverErro.message);
  }
};
module.exports = { getAll, getById, create, fnDelete, att };