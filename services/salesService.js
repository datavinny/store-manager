const SalesModels = require('../models/salesModel');

const getAll = async () => {
  const result = await SalesModels.getAll();
  if (!result) return null;
  return result;
};

const getById = async (id) => {
  const result = await SalesModels.getById(id);
  if (!result) return null;
  if (result && result.length === 0) return null;
  return result;
};

const create = async (arrSales) => {
  const result = await SalesModels.create(arrSales);
  if (!result) return null;
  return result;
};

const fnDelete = async (id) => {
  const result = await SalesModels.fnDelete(id);
  if (!result) return null;
  return result;
};

const att = async (id, arrSales) => {
  const result = await SalesModels.att(id, arrSales);
  if (!result) return null;
  return result;
};
module.exports = { getAll, getById, create, fnDelete, att };