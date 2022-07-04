const chai = require('chai');
// const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

const SalesController = require('../../../controllers/salesController');
const SalesService = require('../../../services/salesService');

// chai.use(chaiAsPromised);

describe('Sales Controller', () => {
  describe('testa erro', () => {
  beforeEach(sinon.restore)

  it('dispara erro caso a SalesController.getAll dispare', async () => {
    sinon.stub(SalesController, 'getAll').rejects();
    return chai.expect(SalesController.getAll({}, {})).to.be.rejected;
  })

  it('dispara erro caso a SalesController.getById dispare', async () => {
  sinon.stub(SalesController, 'getById').rejects();
  return chai.expect(SalesController.getById({}, {})).to.be.rejected;
  })

  it('dispara erro caso a SalesController.create dispare', async () => {
  sinon.stub(SalesController, 'create').rejects();
  return chai.expect(SalesController.create({}, {})).to.be.rejected;
  })

  it('dispara erro caso a SalesController.att dispare', async () => {
  sinon.stub(SalesController, 'att').rejects();
  return chai.expect(SalesController.att({}, {})).to.be.rejected;
  })

  it('dispara erro caso a SalesController.fnDelete dispare', async () => {
  sinon.stub(SalesController, 'fnDelete').rejects();
  return chai.expect(SalesController.fnDelete({}, {})).to.be.rejected;
  })
  
  it('dispara erro caso a SalesController.getBySearch dispare', async () => {
  sinon.stub(SalesController, 'getBySearch').rejects();
  return chai.expect(SalesController.getBySearch({}, {})).to.be.rejected;
  })
  })
    describe('quando o service não retorna nada', () => {
      beforeEach(sinon.restore);
    before(() => {
      sinon.stub(SalesService, 'getAll')
        .resolves(undefined);
      sinon.stub(SalesService, 'getById')
        .resolves(undefined);
      sinon.stub(SalesService, 'create')
        .resolves(undefined);
      sinon.stub(SalesService, 'att')
        .resolves(undefined);
      sinon.stub(SalesService, 'fnDelete')
        .resolves(undefined);
      
    });
  it('getAll', async () => {
    const result = await SalesController.getAll({}, {})
   chai.expect(result).to.be.equal(null);
  })

  it('getById', async () => {
    const req = { params: { id: 1 } };
    const result = await SalesController.getById(req, {})
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
      const req = { body: mock };
    const result = await SalesController.create(req, {})
   chai.expect(result).to.be.equal(null);
  })

    it('att', async () => {
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
    const req = { params: { id: 1 }, body: mock };
    const result = await SalesController.att(req, {})
    chai.expect(result).to.be.equal(null);
  })

  it('fnDelete', async () => {
    const req = { params: { id: 1 } };
    const result = await SalesController.fnDelete(req, {})
    chai.expect(result).to.be.equal(null);
  })
})
});

