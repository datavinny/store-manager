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
  return { id: result.insertId, name };
};

const att = async (id, name) => {
  // const query = 'REPLACE INTO StoreManager.products (id, name) VALUES (?,?)';
  const query = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
  await connection.execute(query, [name, id]);
  return { id, name };
};

const fnDelete = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id= ?';
  const [result] = await connection.execute(query, [id]);
  return result;
};

const getBySearch = async (q) => {
  // const data = await getAll();
  // const foundProducts = data.filter((p) => p.name.includes(q));
  // return foundProducts;
  const [products] = await connection.execute(
    `SELECT * FROM StoreManager.products WHERE name LIKE '%${q}%'`, 
  );
  return products;
};
module.exports = { getAll, getById, create, att, fnDelete, getBySearch };