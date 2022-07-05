const chai = require('chai');
// const chaiAsPromised = require('chai-as-promised');
// const sandbox = require('sinon');
const sandbox = require("sinon").createSandbox();

const Controller = require('../../../../controllers/salesController');
const Service = require('../../../../services/salesService');

const Mocks = require('../../salesMocks');
// chai.use(chaiAsPromised);

describe('Sales - Controller', () => {
  describe('caso não haja problemas', () => {
    const res = {};
    const req = {};
    beforeEach(() => {
      req.params = sinon.stub().returns({ id: 1 });
      req.body = sinon.stub().returns(Mocks.reqAtt);

      res.status = sinon.stub().returns(200);
      res.json = sinon.stub().returns(Mocks.resAtt);
      
      sandbox.stub(Service, 'att').resolves(Mocks.resAtt)
    })
    afterEach(() => {
      sandbox.restore();
    })

    it('é chamado com status 200', async () => {
      await Controller.att(req, res);
      chai.expect(response.status.calledWith(200)).to.be.equal(true);
    })
    it('é chamado com json', async () => {
      await Controller.att(req, res);
      chai.expect(response.json.calledWith(Mocks.resAtt)).to.be.equal(true);
    });
  })
})