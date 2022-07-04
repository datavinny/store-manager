const chai = require('chai')
const sinon = require('sinon');

const SalesModel = require('../../../models/salesModel');

describe('Sales Models - testa o resultado de sucesso', () => {
  it('getAll', async () => {
  const result = await SalesModel.getAll()
   chai.expect(result).to.have.all.keys('saleId', 'date', 'productId', 'quantity');
  })
  it('getById', async () => {
    const id = 1;
    const result = await SalesModel.getById(id)
    chai.expect(result).to.have.all.keys('date', 'productId', 'quantity');
  })
  it('create', async () => {
    const mock = [
      {
        "productId": 1,
        "quantity": 1
      },
      {
        "productId": 2,
        "quantity": 5
      }
    ];
    const result = await SalesModel.create(mock)
    chai.expect(result).to.have.all.keys('id', 'itemsSold');
  })
  it('att', async () => {
    const id = 1;
    const mock = [
      {
        "productId": 1,
        "quantity": 10
      },
      {
        "productId": 2,
        "quantity": 50
      }
    ];
    const result = await SalesModel.att(id, mock)
    chai.expect(result).to.have.all.keys('saleId', 'itemsUpdated');
  })
  it('fnDelete', async () => {
    const id = 1
    const result = await SalesModel.fnDelete(id)
    chai.expect(result).to.have.all.keys('salesProducts', 'sales');
  })
})