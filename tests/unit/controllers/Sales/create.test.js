const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sandbox = require("sinon").createSandbox();

const Controller = require('../../../../controllers/salesController');
const Service = require('../../../../services/salesService');

const Mocks = require('../../salesMocks');
chai.use(chaiAsPromised);

describe('Sales - Controller', () => {
  describe('testando resposta', () => {
    const res = {};
    const req = {};
    beforeEach(() => {
      req.body = sandbox.stub().returns(Mocks.reqCreate);
      req.params = sandbox.stub().returns({ id: 1 });

      res.status = sandbox.stub().returns(res);
      res.json = sandbox.stub().returns(res);
      
      sandbox.stub(Service, 'create').resolves(Mocks.resCreate)
    })
    afterEach(() => {
      sandbox.restore();
    })
    
    it('Create teste status 201', async () => {
      await Controller.create(req, res);
      chai.expect(res.status.calledWith(201)).to.be.equal(true);
    })
    it('Create teste json', async () => {
      await Controller.create(req, res);
      chai.expect(res.json.calledWith(Mocks.resCreate)).to.be.equal(true);
    });
  })
})