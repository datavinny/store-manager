const connection = require('../helpers/connection'); 

const getDateFromSaleId = async (id) => {
  const query = 'SELECT date FROM StoreManager.sales WHERE id = ?';
  const [sales] = await connection.execute(query, [id]);
  return sales[0].date;
};

const getAll = async () => {
  const [sales] = await connection.execute(
    'SELECT * FROM StoreManager.sales_products',
  );
  const result = Promise.all(sales.map(async (
    { sale_id: saleId, product_id: productId, quantity }) => {
    const date = await getDateFromSaleId(saleId);
    return {
      saleId,
      date,
      productId,
      quantity,
    };
  }));
  return result;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.sales_products WHERE sale_id = ?';
  const [sales] = await connection.execute(query, [id]);
  const result = Promise.all(sales.map(async (
  { product_id: productId, quantity }) => {
    const date = await getDateFromSaleId(id);
    return {
      date,
      productId,
      quantity,
    };
  }));
  return result;
};

const insertDate = async () => {
  const today = new Date();
  const stringDate1 = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const stringDate2 = ` ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  const date = stringDate1 + stringDate2;
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?)',
    [date],
  );
  return result.insertId;
};

const create = async (arrSales) => {
  const saleId = await insertDate();
  // const values = arrSales.map((element) => element);
  // const { productId, quantity } = values[0];
  await arrSales.map(async ({ productId, quantity }) => {
    const [result] = await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
       [saleId, productId, quantity],
    );
    return result;
  });
  return {
    id: saleId,
    itemsSold: arrSales,
  };
};

const fnDelete = async (id) => {
  const query1 = 'DELETE FROM StoreManager.sales_products WHERE sale_id= ?';
  const [salesProducts] = await connection.execute(query1, [id]);
    const query2 = 'DELETE FROM StoreManager.sales WHERE id= ?';
  const [sales] = await connection.execute(query2, [id]);
  return { salesProducts, sales };
};

const att = async (id, arrSales) => {
  const query = (
    `UPDATE StoreManager.sales_products 
    SET quantity = ? WHERE sale_id = ? AND product_id = ?`
  );
  const result = Promise.all(arrSales.map(async ({ productId, quantity }) => {
    await connection.execute(
      query, [quantity, id, productId],
    );
    return { productId, quantity };
  }));
  return {
    saleId: id,
    itemsUpdated: await result,
  };
};
module.exports = { getAll, create, getById, fnDelete, att };