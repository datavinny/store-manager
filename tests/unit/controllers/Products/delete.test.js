const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sandbox = require("sinon").createSandbox();

const Controller = require('../../../../controllers/productsController');
const Service = require('../../../../services/productsService');

const Mocks = require('../../productsMocks');
chai.use(chaiAsPromised);

describe('Products - Controllers', () => {
  describe('Delete testa  o res.status', () => {
    const res = {};
    const req = {};
    beforeEach(() => {
      req.body = {};
      req.params = sandbox.stub().returns({ id: 1 });

      res.status = sandbox.stub().returns(res);
      res.json = sandbox.stub().returns();
      
      sandbox.stub(Service, 'fnDelete').resolves();
    });
    afterEach(() => {
      sandbox.restore();
    })

    it('Delete é chamado com status X', async () => {
      await Controller.fnDelete(req, res)
      chai.expect(res.status.calledWith(204)).to.be.equal(true);
    })
  })
})