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
      req.body = sinon.stub().returns(Mocks.reqCreate);
      req.params = sinon.stub().returns({ id: 1 });

      res.status = sinon.stub().returns(201);
      res.json = sinon.stub().returns(Mocks.resCreate);
      
      sandbox.stub(Service, 'create').resolves(Mocks.create);
    });
    afterEach(() => {
      sandbox.restore()
    })
    
    it('é chamado com status X', async () => {
      await Controller.create(req, res)
      chai.expect(response.status.calledWith(201)).to.be.equal(true);
    })
    it('é chamado o json X', async () => {
      await Controller.create(req, res);
      chai.expect(response.json.calledWith(Mocks.resCreate)).to.be.equal(true);
    });
  })
})