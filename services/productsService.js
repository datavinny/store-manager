const ProductsModels = require('../models/productsModel');

const getAll = async () => {
  const result = await ProductsModels.getAll();
  if (!result) return null;
  return result;
};

const getById = async (id) => {
  const result = await ProductsModels.getById(id);
  if (!result) return null;
  return result;
};

const create = async (name) => {
  const result = await ProductsModels.create(name);
  if (!result) return null;
  return result;
};

module.exports = { getAll, getById, create };