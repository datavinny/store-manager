const chai = require('chai');
// const chaiAsPromised = require('chai-as-promised');
// const sandbox = require('sinon');
const sandbox = require("sinon").createSandbox();

const Controller = require('../../../../controllers/salesController');
const Service = require('../../../../services/salesService');

const Mocks = require('../../salesMocks');
// chai.use(chaiAsPromised);

describe('Sales - Controller', () => {
  describe('caso service rejeite', () => {
    const res = {};
    const req = {};
    beforeEach(() => {
      req.params = sinon.stub().returns({ id: 1 });

      res.status = sinon.stub().returns(200);
      res.json = sinon.stub().returns(Mocks.resGetById);
      
      sandbox.stub(Service, 'getById').resolves(Mocks.resGetById)
    })
    afterEach(() => {
      sandbox.restore();
    })
    
    it('é chamado com status 200', async () => {
      await Controller.getById(req, res);
      chai.expect(response.status.calledWith(200)).to.be.equal(true);
    })
    it('é chamado com json', async () => {
      await Controller.getById(req, res);
      chai.expect(response.json.calledWith(Mocks.resGetById)).to.be.equal(true);
    });
  })
 describe('caso service retorne null ou undefined', () => {
    const res = {};
    const req = {};
    beforeEach(() => {
      req.params = sinon.stub().returns({ id: 1 });

      res.status = sinon.stub().returns(404);
      res.json = sinon.stub().returns({ message: 'Sale not found' });
      
      sandbox.stub(Service, 'getById').resolves(null);
    });
    afterEach(() => {
      sandbox.restore()
    })

    it('é chamado com status 404', async () => {
      await Controller.getById(req, res)
      chai.expect(response.status.calledWith(404)).to.be.equal(true);
    })
    it('é chamado com json', async () => {
      await Controller.getById(req, res);
      chai.expect(response.json.calledWith({ message: 'Product not found' })).to.be.equal(true);
    });
  })
})