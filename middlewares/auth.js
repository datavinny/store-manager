const ProductsService = require('../services/productsService');

const messageNstatus = require('../helpers/messageNstatus');

// const httpStatus = {
//   nameIsRequired: 400,
//   minNameLengthIsFive: 422,
//   productIdIsRequired: 400,
//   quantityIsRequired: 400,
//   minQuantityIsOne: 422,
//   productMustExist: 404,
// };

const isValueUndefined = (value) => {
  if (value === Number(0)) return false;
  if (!value) return true;
  return false;
};

const name = (req, res, next) => {
  const { name: reqName } = req.body;
  if (!reqName) {
    return res.status(messageNstatus.nameIsRequired.status)
        .send({ message: messageNstatus.nameIsRequired.message });
  }
  if (reqName.length < 5) {
    return res.status(messageNstatus.minNameLengthIsFive.status)
      .send({ message: messageNstatus.minNameLengthIsFive.message });
  }
    next();
};

const isNotProductValid = async (produtoId) => {
  const result = await ProductsService.getById(produtoId);
  if (result === undefined) return true;
  if (result === null) return true;
  return false;
};

const validateSalesInfo = (arrSales) => (
  Promise.all(arrSales.map(async ({ productId: prodId, quantity: quan }) => {
    switch (true) {
      case isValueUndefined(prodId):
        return messageNstatus.productIdIsRequired;
      case isValueUndefined(quan):
        return messageNstatus.quantityIsRequired;
      case (quan < 1):
        return messageNstatus.minQuantityIsOne;
      case await isNotProductValid(prodId):
        return messageNstatus.productMustExist;
      default: return { message: 'next' };
    }
  }))
  );

const salesInfo = async (req, res, next) => {
  const arrSales = req.body;
  const data = await validateSalesInfo(arrSales);
  const result = data.find((e) => e.message !== 'next');
  if (result) {
    return res.status(result.status).send({ message: result.message });
  }
  next();
};

module.exports = { name, salesInfo };