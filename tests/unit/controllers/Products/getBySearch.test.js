const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sandbox = require("sinon").createSandbox();

const Controller = require('../../../../controllers/productsController');
const Service = require('../../../../services/productsService');

const Mocks = require('../../productsMocks');
chai.use(chaiAsPromised);

describe('Products - Controllers', () => {
  describe('GetBySearch - testa  o res.status', () => {
    const res = {};
    const req = {};
    beforeEach(() => {
      req.query = sandbox.stub().returns({ q: "mar" });

      res.status = sandbox.stub().returns(res);
      res.json = sandbox.stub().returns(res);
      
      sandbox.stub(Service, 'getBySearch').resolves(Mocks.resGetBySearch);
    });
    afterEach(() => {
      sandbox.restore();
    })

    it('GetBySearch é chamado com status X', async () => {
      await Controller.getBySearch(req, res)
      chai.expect(res.status.calledWith(200)).to.be.equal(true);
    })
    it('GetBySearch é chamado o json X', async () => {
      await Controller.getBySearch(req, res);
      chai.expect(res.json.calledWith(Mocks.resGetBySearch)).to.be.equal(true);
    });
  })
})