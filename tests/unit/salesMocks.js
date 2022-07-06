const allSales = [
  {
    "sale_id": 1,
    "productId": 1,
    "quantity": 5
  },
  {
    "sale_id": 1,
    "productId": 2,
    "quantity": 10
  },
  {
    "sale_id": 2,
    "productId": 3,
    "quantity": 15
  }
];

const resGetAll = [...allSales];
const resGetById = {
  "sale_id": 1,
  "productId": 1,
  "quantity": 5
};
const reqCreate = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
];
const resCreate = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1
    },
    {
      productId: 2,
      quantity: 5
    }
  ]
};
const reqAtt = [
  {
    "productId": 1,
    "quantity": 10
  },
  {
    "productId": 2,
    "quantity": 50
  }
];
const resAtt = {
  saleId: 1,
    itemsUpdated: [
      {
        productId: 1,
        quantity:10
      },
      {
        productId: 2,
        quantity:50
      }
  ]
}
module.exports = {
  allSales,
  resGetAll,
  resGetById,
  reqCreate,
  resCreate,
  reqAtt,
  resAtt
};