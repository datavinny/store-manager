const chai = require('chai');
// const chaiAsPromised = require('chai-as-promised');
// const sandbox = require('sandbox');
const sandbox = require("sinon").createSandbox();

const Controller = require('../../../../controllers/productsController');
const Service = require('../../../../services/productsService');

const Mocks = require('../../productsMocks');
// chai.use(chaiAsPromised);

describe('Products - Controllers', () => {
  describe('testa  o response', () => {
    const res = {};
    const req = {};
    beforeEach(() => {
      req.body = Mocks.reqAtt;
      req.params = sinon.stub().returns({ id: 1});

      res.status = sinon.stub().returns(200);
      res.json = sinon.stub().returns(Mocks.resAtt);
      
      sandbox.stub(Service, 'att').resolves(Mocks.resAtt);
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
      chai.expect(response.json.calledWith(Mocks.resAtt)).to.be.equal(true);
    });
  })
})