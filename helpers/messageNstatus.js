const messageNstatus = {
  nameIsRequired: { status: 400, message: '"name" is required' },
  minNameLengthIsFive: { status: 422, message: '"name" length must be at least 5 characters long' },
  productIdIsRequired: { status: 400, message: '"productId" is required' },
  quantityIsRequired: { status: 400, message: '"quantity" is required' },
  minQuantityIsOne: { status: 422, message: '"quantity" must be greater than or equal to 1' },
  productMustExist: { status: 404, message: 'Product not found' },
};

module.exports = messageNstatus;