const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sandbox = require("sinon").createSandbox();

const Controller = require('../../../../controllers/salesController');
const Service = require('../../../../services/salesService');

const Mocks = require('../../salesMocks');
chai.use(chaiAsPromised);

describe('Sales - Controller', () => {
  describe('Create caso não haja problemas', () => {
    const res = {};
    const req = {};
    beforeEach(() => {
      req.params = sandbox.stub().returns({ id: 1 });
      req.body = Mocks.reqAtt;

      res.status = sandbox.stub().returns(res);
      res.json = sandbox.stub().returns(res);
      
      sandbox.stub(Service, 'att').resolves(Mocks.resAtt)
    })
    afterEach(() => {
      sandbox.restore();
    })

    it('Create é chamado com status 200', async () => {
      await Controller.att(req, res);
      chai.expect(res.status.calledWith(200)).to.be.equal(true);
    })
    it('Create é chamado com json', async () => {
      await Controller.att(req, res);
      chai.expect(res.json.calledWith(Mocks.resAtt)).to.be.equal(true);
    });
  })
})