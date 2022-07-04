const chai = require('chai');
// const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

const SalesController = require('../../../controllers/salesController');
const SalesService = require('../../../services/salesService');

// chai.use(chaiAsPromised);

describe('Sales Controller', () => {
  beforeEach(sinon.restore)

  it('dispara erro caso a SalesService.getAll dispare', async () => {
    sinon.stub(SalesService, 'getAll').rejects();
    return chai.expect(SalesController.getAll({}, {})).to.be.rejected;
  })

  it('dispara erro caso a SalesService.getById dispare', async () => {
  sinon.stub(SalesService, 'getById').rejects();
  return chai.expect(SalesController.getById({}, {})).to.be.rejected;
  })

  it('dispara erro caso a SalesService.create dispare', async () => {
  sinon.stub(SalesService, 'create').rejects();
  return chai.expect(SalesController.create({}, {})).to.be.rejected;
  })

  it('dispara erro caso a SalesService.att dispare', async () => {
  sinon.stub(SalesService, 'att').rejects();
  return chai.expect(SalesController.att({}, {})).to.be.rejected;
  })

  it('dispara erro caso a SalesService.fnDelete dispare', async () => {
  sinon.stub(SalesService, 'fnDelete').rejects();
  return chai.expect(SalesController.fnDelete({}, {})).to.be.rejected;
  })
  
  it('dispara erro caso a SalesService.getBySearch dispare', async () => {
  sinon.stub(SalesService, 'getBySearch').rejects();
  return chai.expect(SalesController.getBySearch({}, {})).to.be.rejected;
  })
})
