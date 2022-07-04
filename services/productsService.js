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

const att = async (id, name) => {
  const result = await ProductsModels.att(id, name);
  if (!result) return null;
  return result;
};

const fnDelete = async (id) => {
  const result = await ProductsModels.fnDelete(id);
  if (!result) return null;
  return result;
};

const getBySearch = async (q) => {
  const result = await ProductsModels.getBySearch(q);
  if (!result) return null;
  return result;
};
module.exports = { getAll, getById, create, att, fnDelete, getBySearch };