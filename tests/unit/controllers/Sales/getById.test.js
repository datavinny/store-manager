const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sandbox = require("sinon").createSandbox();

const Controller = require('../../../../controllers/salesController');
const Service = require('../../../../services/salesService');

const Mocks = require('../../salesMocks');
chai.use(chaiAsPromised);

describe('Sales - Controller', () => {
  describe('getById teste resposta', () => {
    const res = {};
    const req = {};
    beforeEach(() => {
      req.body = {}
      req.params = sandbox.stub().returns({ id: 1 });

      res.status = sandbox.stub().returns(res);
      res.json = sandbox.stub().returns(res);
      
      sandbox.stub(Service, 'getById').resolves(Mocks.resGetById)
    })
    afterEach(() => {
      sandbox.restore();
    })
    
    it('getById é chamado com status 200', async () => {
      await Controller.getById(req, res);
      chai.expect(res.status.calledWith(200)).to.be.equal(true);
    })
    it('getById chamado com json', async () => {
      await Controller.getById(req, res);
      chai.expect(res.json.calledWith(Mocks.resGetById)).to.be.equal(true);
    });
  })
 describe('getById caso service retorne null ou undefined', () => {
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

    it('getById é chamado com status 404', async () => {
      await Controller.getById(req, res)
      chai.expect(res.status.calledWith(404)).to.be.equal(true);
    })
    it('getById é chamado com json', async () => {
      await Controller.getById(req, res);
      chai.expect(res.json.calledWith({ message: 'Sale not found' })).to.be.equal(true);
    });
  })
})