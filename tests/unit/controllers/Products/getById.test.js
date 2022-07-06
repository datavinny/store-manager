const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sandbox = require("sinon").createSandbox();

const Controller = require('../../../../controllers/productsController');
const Service = require('../../../../services/productsService');

const Mocks = require('../../productsMocks');
chai.use(chaiAsPromised);

describe('Products - Controllers', () => {
  describe('getById testa a resposta', () => {
    const res = {};
    const req = {};
    beforeEach(() => {
      req.params = sandbox.stub().returns({ id: 1 });

      res.status = sandbox.stub().returns(res);
      res.json = sandbox.stub().returns();
      
      sandbox.stub(Service, 'getById').resolves(Mocks.resGetById);
    });
    afterEach(() => {
      sandbox.restore()
    })

    it('GetById é chamado com status 200', async () => {
      await Controller.getById(req, res);
      chai.expect(res.status.calledWith(200)).to.be.equal(true);
    })
    it('GetById é chamado com json', async () => {
      await Controller.getById(req, res);
      chai.expect(res.json.calledWith(Mocks.resGetById)).to.be.equal(true);
    });
  })
  describe('GetById caso service retorne null ou undefined', () => {
    const res = {};
    const req = {};
    beforeEach(() => {
      req.params = sandbox.stub().returns({ id: 1 });

      res.status = sandbox.stub().returns(res);
      res.json = sandbox.stub().returns(res);
      
      sandbox.stub(Service, 'getById').resolves(null);
    });
    afterEach(() => {
      sandbox.restore()
    })

    it('GetById é chamado com status 404', async () => {
      await Controller.getById(req, res)
      chai.expect(res.status.calledWith(404)).to.be.equal(true);
    })
    it('GetById é chamado com json', async () => {
      await Controller.getById(req, res);
      chai.expect(res.json.calledWith({ message: 'Product not found' })).to.be.equal(true);
    });
  })
})