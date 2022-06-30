const SalesService = require('../services/salesService');

const message = {
  nameIsRequired: { message: '"name" is required' },
  minNameLengthIsFive: { message: '"name" length must be at least 5 characters long' },
  productIdIsRequired: { message: '"productId" is required' },
  quantityIsRequired: { message: '"quantity" is required' },
  minQuantityIsOne: { message: '"quantity" must be greater than or equal to 1' },
  productMustExist: { message: 'Product not found' },
};

const isValueUndefined = (value) => {
  if (value === Number(0)) return false;
  if (!value) return true;
  return false;
};

const name = (req, res, next) => {
    const { name: reqName } = req.body;
    if (!reqName) return res.status(400).send(message.nameIsRequired);
    if (reqName.length < 5) return res.status(422).send(message.minNameLengthIsFive);
    next();
};

const salesInfo = (req, res, next) => {
  const arrSales = req.body;
  arrSales.forEach(({ productId: p, quantity: q }) => {
        switch (true) {
          case isValueUndefined(p):
            return res.status(400).send(message.productIdIsRequired);
          case isValueUndefined(q):
            return res.status(400).send(message.quantityIsRequired);
          case (q < 1):
            return res.status(422).send(message.minQuantityIsOne);
          case (SalesService.getById(p) !== true):
            return res.status(404).send(message.productMustExist);
          default:
            next();
        }
    });
};

module.exports = { name, salesInfo };