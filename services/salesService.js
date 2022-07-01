const SalesModels = require('../models/salesModel');

const getAll = async () => {
  const result = await SalesModels.getAll();
  if (!result) return null;
  return result;
};

const getById = async (saleId) => {
  const result = await SalesModels.getById(saleId);
  if (!result) return null;
  return result;
};

const create = async (arrSales) => {
  const result = await SalesModels.create(arrSales);
  if (!result) return null;
  return result;
};

module.exports = { getAll, getById, create };