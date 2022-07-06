const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sandbox = require("sinon").createSandbox();

const Controller = require('../../../../controllers/salesController');
const Service = require('../../../../services/salesService');

const Mocks = require('../../salesMocks');
chai.use(chaiAsPromised);

describe('Sales - Controller', () => {
  describe('GetAll caso service rejeite', () => {
    const res = {};
    const req = {};
    beforeEach(() => {
      res.status = sandbox.stub().returns(res);
      res.json = sandbox.stub().returns(res);
      
      sandbox.stub(Service, 'getAll').resolves(Mocks.resGetAll)
    })
    afterEach(() => {
      sandbox.restore();
    })

    it('GetAll é chamado com status 200', async () => {
      await Controller.getAll(req, res);
      chai.expect(res.status.calledWith(200)).to.be.equal(true);
    })
    it('GetAll é chamado com json', async () => {
      await Controller.getAll(req, res);
      chai.expect(res.json.calledWith(Mocks.resGetAll)).to.be.equal(true);
    });
  })
  describe('GetAll caso sale não exista', () => {
    const res = {};
    const req = {};
    beforeEach(() => {
      req.params = sandbox.stub().returns({ id: 1 });

      res.status = sandbox.stub().returns(res);
      res.json = sandbox.stub().returns(res);
      
      sandbox.stub(Service, 'getAll').resolves(null);
    });
    afterEach(() => {
      sandbox.restore()
    })

    it('GetAll é chamado com status 404', async () => {
      await Controller.getAll(req, res)
      chai.expect(res.status.calledWith(404)).to.be.equal(true);
    })
    it('GetAll é chamado com json', async () => {
      await Controller.getAll(req, res);
      chai.expect(res.json.calledWith({ message: 'Sale not found' })).to.be.equal(true);
    });
  })
})