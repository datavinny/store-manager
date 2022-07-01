const connection = require('../helpers/connection'); 

const getAll = async () => {
  const [sales] = await connection.execute(
    'SELECT * FROM StoreManager.sales_products',
  );
  return {
    productId: sales.productId,
    quantity: sales.quantity,
  };
};

const getDateFromSaleId = async (saleId) => {
  const query = 'SELECT * FROM StoreManager.sales WHERE id LIMIT 1 VALUES (?)';
  const [sales] = await connection.execute(query, [saleId]);
  console.log('sales', sales);
  return sales;
};

const getById = async (saleId) => {
  const date = await getDateFromSaleId();
  console.log('data', date);
  const query = 'SELECT * FROM StoreManager.sales_products WHERE saleId = ? LIMIT 1';
  const [sales] = await connection.execute(query, [saleId]);
  console.log('sales', sales);
  return {
    date,
    productId: sales.productId,
    quantity: sales.quantity,
  };
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
  await arrSales.forEach(async ({ productId, quantity }) => {
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

module.exports = { getAll, create, getById };