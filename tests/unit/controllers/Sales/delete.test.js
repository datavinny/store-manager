const chai = require('chai');
// const chaiAsPromised = require('chai-as-promised');
// const sandbox = require('sinon');
const sandbox = require("sinon").createSandbox();

const Controller = require('../../../../controllers/salesController');
const Service = require('../../../../services/salesService');

const Mocks = require('../../salesMocks');
// chai.use(chaiAsPromised);

describe('Sales - Controller', () => {
  describe('caso tudo funcione', () => {
    const res = {};
    const req = {};
    beforeEach(() => {
      req.params = sinon.stub().returns({ id: 1 });

      res.status = sinon.stub().returns(204);
      res.json = sinon.stub().returns();
      
      sandbox.stub(Service, 'fnDelete').resolves(Mocks.allSales)
    })
    afterEach(() => {
      sandbox.restore();
    })
    
    it('é chamado com status 200', async () => {
      await Controller.fnDelete(req, res);
      chai.expect(response.status.calledWith(204)).to.be.equal(true);
    })
    it('é chamado com json', async () => {
      await Controller.fnDelete(req, res);
      chai.expect(response.json.calledWith()).to.be.equal(true);
    });
  })
})