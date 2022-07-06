const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sandbox = require("sinon").createSandbox();

const Controller = require('../../../../controllers/productsController');
const Service = require('../../../../services/productsService');

const Mocks = require('../../productsMocks');
chai.use(chaiAsPromised);

describe('Products - Controllers', () => {
  describe('create testa a resposta', () => {
    const res = {};
    const req = {};
    beforeEach(() => {
      req.body = Mocks.reqCreate;
      req.params = sandbox.stub().returns({ id: 1 });

      res.status = sandbox.stub().returns(res);
      res.json = sandbox.stub().returns(res);
      
      sandbox.stub(Service, 'create').resolves(Mocks.resCreate);
    });
    afterEach(() => {
      sandbox.restore()
    })
    
    it('create é chamado com status X', async () => {
      await Controller.create(req, res)
      chai.expect(res.status.calledWith(201)).to.be.equal(true);
    })
    it('create é chamado o json X', async () => {
      await Controller.create(req, res);
      chai.expect(res.json.calledWith(Mocks.resCreate)).to.be.equal(true);
    });
  })
})