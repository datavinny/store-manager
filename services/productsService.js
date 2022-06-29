const productsModels = require('../models/productsModel');

const getAll = async () => {
  const result = await productsModels.getAll();
  if (!result) return null;
  return result;
};

const getById = async (id) => {
  const result = await productsModels.getById(id);
  if (!result) return null;
  return result;
};

module.exports = { getAll, getById };