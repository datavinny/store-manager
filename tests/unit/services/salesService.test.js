const chai = require('chai');
const sinon = require('sinon');

const SalesService = require('../../../services/salesService');
const SalesModel = require('../../../models/salesModel');
describe('Products Services', () => {
  describe('quando não ocorre erros', () => {
  beforeEach(sinon.restore);
  it('getAll', async () => {
  const result = await SalesService.getAll()
   chai.expect(result).to.be.a('array')
  })
  it('getById', async () => {
    const id = 1;
    const result = await SalesService.getById(id)
    chai.expect(result).to.be.a('array')
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
    const result = await SalesService.create(mock)
    chai.expect(result).to.be.a('array')
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
    const result = await SalesService.att(id, mock)
    chai.expect(result).to.be.a('array')
  })
  it('fnDelete', async () => {
    const id = 1
    const result = await SalesService.fnDelete(id)
    chai.expect(result).to.be(undefined)
  })
})
  describe('quando ocorre erros', () => {
      beforeEach(sinon.restore);
    before(() => {
      sinon.stub(SalesModel, 'getAll')
        .resolves(undefined);
      sinon.stub(SalesModel, 'getById')
        .resolves(undefined);
      sinon.stub(SalesModel, 'create')
        .resolves(undefined);
      sinon.stub(SalesModel, 'att')
        .resolves(undefined);
      sinon.stub(SalesModel, 'fnDelete')
        .resolves(undefined);
      
    });
  it('getAll', async () => {
    const result = await SalesService.getAll()
   chai.expect(result).to.be.equal(null);
  })

  it('getById', async () => {
    const result = await SalesService.getById(1)
   chai.expect(result).to.be.equal(null);
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
    const result = await SalesService.create(mock)
   chai.expect(result).to.be.equal(null);
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
    const result = await SalesService.att(id, mock)
    chai.expect(result).to.be.equal(null);
  })

  it('fnDelete', async () => {
    const id = 1
    const result = await SalesService.fnDelete(id)
    chai.expect(result).to.be.equal(null);
  })
})
})
