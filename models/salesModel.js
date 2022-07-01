const connection = require('../helpers/connection'); 

const getHighestId = async () => {
  const query = 'SELECT * FROM StoreManager.sales_products ORDER BY sale_id DESC LIMIT 1';
  const [products] = await connection.execute(query);
  return products;
};

const create = async (arrSales) => {
  const highestId = await getHighestId();
  console.log(highestId);
  const saleId = highestId + 1;
  console.log('highestId', highestId);
  // 
  const queryCreate = `INSERT INTO StoreManager.sales_products 
    (sale_id, product_id, quantity) VALUES (?, ?, ?)`;
  const values = arrSales.forEach(({ productId, quantity }) => [productId, quantity]);
  const [result] = await connection.execute(queryCreate, [saleId, ...values]);
  return result;
};

module.exports = { create };