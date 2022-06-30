const SalesModels = require('../models/salesModel');

const getById = async (id) => {
  try {
  const result = await SalesModels.getById(id);
  console.log(result);
  if (!result) return null;
  return true;
  } catch (error) {
    console.error(error);
    return { error };
  }
};

const create = async (arrSales) => {
  const result = await SalesModels.create(arrSales);
  if (!result) return null;
  return result;
};

module.exports = { getById, create };