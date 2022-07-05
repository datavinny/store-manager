const chai = require('chai');
// const chaiAsPromised = require('chai-as-promised');
// const sandbox = require('sandbox');
const sandbox = require("sinon").createSandbox();

const Controller = require('../../../../controllers/productsController');
const Service = require('../../../../services/productsService');

const Mocks = require('../../productsMocks');
// chai.use(chaiAsPromised);

describe('Products - Controllers', () => {
  describe('testa  o res.status', () => {
    const res = {};
    const req = {};
    beforeEach(() => {
      res.status = sinon.stub().returns(200);
      res.json = sinon.stub().returns(Mocks.resGetAll);
      
      sandbox.stub(Service, 'getAll').resolves(Mocks.resGetAll);
    });
    afterEach(() => {
      sandbox.restore();
    })

    it('é chamado com status X', async () => {
      await Controller.att(req, res)
      chai.expect(response.status.calledWith(200)).to.be.equal(true);
    })
    it('é chamado o json X', async () => {
      await Controller.att(req, res);
      chai.expect(response.json.calledWith(Mocks.resGetAll)).to.be.equal(true);
    });
  })
  describe('caso service retorne null ou undefined', () => {
    beforeEach(() => {
      res.status = sinon.stub().returns(404);
      res.json = sinon.stub().returns();
      
      sandbox.stub(Service, 'getAll').resolves(undefined);
    });
    afterEach(() => {
      sandbox.restore();
    })
      
    it('é chamado com status X', async () => {
      await Controller.att(req, res)
      chai.expect(response.status.calledWith(404)).to.be.equal(true);
    })
  })
})