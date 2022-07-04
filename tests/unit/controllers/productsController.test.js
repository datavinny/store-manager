const chai = require('chai');
// const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

const ProductsController = require('../../../controllers/productsController');
const ProductsService = require('../../../services/productsService');

// chai.use(chaiAsPromised);

describe('Products Controller', () => {
describe('testa caso service retorn null ou undefined', () => {
    before(() => {
      sinon.stub(ProductsService, 'getAll')
        .resolves(null);
      sinon.stub(ProductsService, 'getById')
        .resolves(null);
      sinon.stub(ProductsService, 'create')
        .resolves(null);
      sinon.stub(ProductsService, 'att')
        .resolves(null);
      sinon.stub(ProductsService, 'fnDelete')
        .resolves(null);
      sinon.stub(ProductsService, 'getBySearch')
        .resolves(null);
      
    });
   it('getAll', async () => {
    const result = await ProductsController.getAll({}, {})
   chai.expect(result).to.be.equal(null);
  })

  it('getById', async () => {
    const req = { params: { id: 1 } };
    const result = await ProductsController.getById(req, {})
   chai.expect(result).to.be.equal(null);
  })

  it('create', async () => {
    const req = { body: { name: "Davi" } };
    const result = await ProductsController.create(req, {})
   chai.expect(result).to.be.equal(null);
  })

    it('att', async () => {
    const req = { body: { name: "Loki" }, params: { id: 1 } };
    const result = await ProductsController.att(req, {})
    chai.expect(result).to.be.equal(null);
  })

  it('fnDelete', async () => {
    const req = { params: { id: 1 } };
    const result = await ProductsController.fnDelete(req, {})
    chai.expect(result).to.be.equal(null);
  })
  
  it('getBySearch', async () => {
    const req = { query: { q: 'mar' } };
    const result = await ProductsController.getBySearch(req, {})
    chai.expect(result).to.be.equal(null);
  })
})
describe('testa caso o service rejeite', () => {
  beforeEach(sinon.restore)

  it('dispara erro caso a ProductsController.getAll dispare', async () => {
    sinon.stub(ProductsController, 'getAll').rejects();
    return chai.expect(ProductsController.getAll({}, {})).to.be.rejected;
  })

  it('dispara erro caso a ProductsController.getById dispare', async () => {
  sinon.stub(ProductsController, 'getById').rejects();
  return chai.expect(ProductsController.getById({}, {})).to.be.rejected;
  })

  it('dispara erro caso a ProductsController.create dispare', async () => {
  sinon.stub(ProductsController, 'create').rejects();
  return chai.expect(ProductsController.create({}, {})).to.be.rejected;
  })

  it('dispara erro caso a ProductsController.att dispare', async () => {
  sinon.stub(ProductsController, 'att').rejects();
  return chai.expect(ProductsController.att({}, {})).to.be.rejected;
  })

  it('dispara erro caso a ProductsController.fnDelete dispare', async () => {
  sinon.stub(ProductsController, 'fnDelete').rejects();
  return chai.expect(ProductsController.fnDelete({}, {})).to.be.rejected;
  })
  
  it('dispara erro caso a ProductsController.getBySearch dispare', async () => {
  sinon.stub(ProductsController, 'getBySearch').rejects();
  return chai.expect(ProductsController.getBySearch({}, {})).to.be.rejected;
  })
})
})

