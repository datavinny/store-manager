const SalesModels = require('../models/salesModel');

const create = async (arrSales) => {
  const result = await SalesModels.create(arrSales);
  if (!result) return null;
  return result;
};

module.exports = { create };