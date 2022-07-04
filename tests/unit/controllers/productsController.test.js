const chai = require('chai');
// const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

const ProductsController = require('../../../controllers/productsController');
const ProductsService = require('../../../services/productsService');

// chai.use(chaiAsPromised);

describe('Products Controller', () => {
  beforeEach(sinon.restore)

  it('dispara erro caso a ProductsService.getAll dispare', async () => {
    sinon.stub(ProductsService, 'getAll').rejects();
    return chai.expect(ProductsController.getAll({}, {})).to.be.rejected;
  })

  it('dispara erro caso a ProductsService.getById dispare', async () => {
  sinon.stub(ProductsService, 'getById').rejects();
  return chai.expect(ProductsController.getById({}, {})).to.be.rejected;
  })

  it('dispara erro caso a ProductsService.create dispare', async () => {
  sinon.stub(ProductsService, 'create').rejects();
  return chai.expect(ProductsController.create({}, {})).to.be.rejected;
  })

  it('dispara erro caso a ProductsService.att dispare', async () => {
  sinon.stub(ProductsService, 'att').rejects();
  return chai.expect(ProductsController.att({}, {})).to.be.rejected;
  })

  it('dispara erro caso a ProductsService.fnDelete dispare', async () => {
  sinon.stub(ProductsService, 'fnDelete').rejects();
  return chai.expect(ProductsController.fnDelete({}, {})).to.be.rejected;
  })
  
  it('dispara erro caso a ProductsService.getBySearch dispare', async () => {
  sinon.stub(ProductsService, 'getBySearch').rejects();
  return chai.expect(ProductsController.getBySearch({}, {})).to.be.rejected;
  })
})
