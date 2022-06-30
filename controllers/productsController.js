const ProductsService = require('../services/productsService');

const getAll = async (req, res) => {
  try {
    const result = await ProductsService.getAll();
    if (!result) return res.status(404).send({ message: 'Product not found' });
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Erro interno no Servidor' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ProductsService.getById(id);
    if (!result) return res.status(404).send({ message: 'Product not found' });
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Erro interno no Servidor' });
  }
};

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const result = await ProductsService.create(name);
    return res.status(201).send(result);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Erro interno no Servidor' });
  }
};

const message = {
  nameIsRequired: { message: '"name" is required' },
  nameLengthLessThan5: { message: '"name" length must be at least 5 characters long' },
};
const productsAuth = (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).send(message.nameIsRequired);
    if (name.length < 5) return res.status(422).send(message.nameLengthLessThan5);
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Erro interno no Servidor' });
  }
};

module.exports = { getAll, getById, create, productsAuth };