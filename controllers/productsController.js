const productsService = require('../services/productsService');

const getAll = async (req, res) => {
  try {
    const result = await productsService.getAll();
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
    const result = await productsService.getById(id);
    if (!result) return res.status(404).send({ message: 'Product not found' });
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Erro interno no Servidor' });
  }
};

module.exports = { getAll, getById };