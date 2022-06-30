const connection = require('../helpers/connection'); 

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.sales_products WHERE id = ?';
  console.log(id);
  const [products] = await connection.execute(query, [id]);
  return products[0];
};

const create = async () => {
  // const query = `INSERT INTO StoreManager.sales_products 
  //   (sale_id, product_id, quantity) VALUES (?, ?, ?)`;
  // const [result] = connection.execute(query, [saleId, productId, quantity]);
  // console.log(result);
  // return result;
};

module.exports = { getById, create };