const connection = require('../helpers/connection'); 

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
    console.log('create', result);
    return result;
  });
  return {
    id: saleId,
    itemsSold: arrSales,
  };
};

module.exports = { create };