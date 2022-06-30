const connection = require('../helpers/connection'); 

const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return products;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [products] = await connection.execute(query, [id]);
  return products[0];
};

const create = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [result] = await connection.execute(query, [name]);
  console.log(result);
  return { id: result.insertId, name };
};

module.exports = { getAll, getById, create };