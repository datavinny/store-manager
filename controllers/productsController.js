const ProductsService = require('../services/productsService');
const messageNstatus = require('../helpers/messageNstatus');

const getAll = async (req, res) => {
  try {
    const result = await ProductsService.getAll();
    if (!result) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(messageNstatus.serverErro.status).json(messageNstatus.serverErro.message);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ProductsService.getById(id);
    if (!result) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(messageNstatus.serverErro.status).json(messageNstatus.serverErro.message);
  }
};

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const result = await ProductsService.create(name);
    return res.status(201).send(result);
  } catch (error) {
    console.error(error);
    return res.status(messageNstatus.serverErro.status).json(messageNstatus.serverErro.message);
  }
};

const att = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const result = await ProductsService.att(id, name);
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(messageNstatus.serverErro.status).json(messageNstatus.serverErro.message);
  }
};

const fnDelete = async (req, res) => {
  try {
    const { id } = req.params;
    await ProductsService.fnDelete(id);
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(messageNstatus.serverErro.status).json(messageNstatus.serverErro.message);
  }
};
module.exports = { getAll, getById, create, att, fnDelete };