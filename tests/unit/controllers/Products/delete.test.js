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
      req.body = {};
      req.params = sinon.stub().returns({ id: 1 });

      res.status = sinon.stub().returns(204);
      res.json = sinon.stub().returns();
      
      sandbox.stub(Service, 'fnDelete').resolves();
    });
    afterEach(() => {
      sandbox.restore();
    })

    it('é chamado com status X', async () => {
      await Controller.fnDelete(req, res)
      chai.expect(response.status.calledWith(204)).to.be.equal(true);
    })
  })
  describe('caso o service rejeite', () => {
    beforeEach(() => {
      req.body = {};
      req.params = sinon.stub().returns({ id: 1 });

      res.status = sinon.stub().returns();
      res.json = sinon.stub().returns();
      
      sandbox.stub(Service, 'fnDelete').rejects();
    })
    afterEach(() => {
      sandbox.restore();
    })

    it('dispara erro caso a Service.fnDelete dispare', async () => {
      sandbox.stub(Service, 'fnDelete').rejects();
      return chai.expect(Controller.fnDelete(req, res)).to.be.rejected;
    })
  })
})