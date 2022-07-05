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
      req.body = sinon.stub().returns(Mocks.reqCreate);
      req.params.id = sinon.stub().returns({ id: 1 });

      res.status = sinon.stub().returns(200);
      res.json = sinon.stub().returns(Mocks.resGetById);
      
      sandbox.stub(Service, 'getById').resolves(Mocks.resCreate)
    })
    afterEach(() => {
      sandbox.restore();
    })
    
    it('é chamado com status 200', async () => {
      await Controller.create(req, res);
      chai.expect(response.status.calledWith(201)).to.be.equal(true);
    })
    it('é chamado com json', async () => {
      await Controller.create(req, res);
      chai.expect(response.json.calledWith(Mocks.resCreate)).to.be.equal(true);
    });
  })
})