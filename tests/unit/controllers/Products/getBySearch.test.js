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
      req.query = sinon.stub().returns({ q: "mar" });

      res.status = sinon.stub().returns(200);
      res.json = sinon.stub().returns(Mocks.resGetBySearch);
      
      sandbox.stub(Service, 'getBySearch').resolves(Mocks.resGetBySearch);
    });
    afterEach(() => {
      sandbox.restore();
    })

    it('é chamado com status X', async () => {
      await Controller.getBySearch(req, res)
      chai.expect(response.status.calledWith(200)).to.be.equal(true);
    })
    it('é chamado o json X', async () => {
      await Controller.getBySearch(req, res);
      chai.expect(response.json.calledWith(Mocks.resGetBySearch)).to.be.equal(true);
    });
  })
})