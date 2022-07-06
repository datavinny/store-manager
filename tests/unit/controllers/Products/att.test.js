const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sandbox = require("sinon").createSandbox();

const Controller = require('../../../../controllers/productsController');
const Service = require('../../../../services/productsService');

const Mocks = require('../../productsMocks');
chai.use(chaiAsPromised);

describe('Products - Controllers', () => {
  describe('att - testa  o response', () => {
    const res = {};
    const req = {};
    beforeEach(() => {
      req.body = Mocks.reqAtt;
      req.params = sandbox.stub().returns({ id: 1});

      res.status = sandbox.stub().returns(res);
      res.json = sandbox.stub().returns(res);
      
      sandbox.stub(Service, 'att').resolves(Mocks.resAtt);
    });
    afterEach(() => {
      sandbox.restore();
    })

    it('att - é chamado com status X', async () => {
      await Controller.att(req, res)
      chai.expect(res.status.calledWith(200)).to.be.equal(true);
    })
    it('att - é chamado o json X', async () => {
      await Controller.att(req, res);
      chai.expect(res.json.calledWith(Mocks.resAtt)).to.be.equal(true);
    });
  })
})