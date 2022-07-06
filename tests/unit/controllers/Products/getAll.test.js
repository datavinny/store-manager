const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sandbox = require("sinon").createSandbox();

const Controller = require('../../../../controllers/productsController');
const Service = require('../../../../services/productsService');

const Mocks = require('../../productsMocks');
chai.use(chaiAsPromised);

describe('Products - Controllers', () => {
  describe('GetAll testa  o res.status', () => {
    const res = {};
    const req = {};
    beforeEach(() => {
      res.status = sandbox.stub().returns(res);
      res.json = sandbox.stub().returns(res);
      
      sandbox.stub(Service, 'getAll').resolves(Mocks.resGetAll);
    });
    afterEach(() => {
      sandbox.restore();
    })

    it('GetAll é chamado com status X', async () => {
      await Controller.att(req, res)
      chai.expect(res.status.calledWith(200)).to.be.equal(false);
    })
    it('GetAll é chamado o json X', async () => {
      await Controller.att(req, res);
      chai.expect(res.json.calledWith(Mocks.resGetAll)).to.be.equal(false);
    });
  })
  // describe('GetAll caso service retorne null ou undefined', () => {
  //   const res = {};
  //   const req = {};
  //   beforeEach(() => {
  //     res.status = sandbox.stub().returns(res);
  //     res.json = sandbox.stub().returns(res);
      
  //     sandbox.stub(Service, 'getAll').resolves(null);
  //   });
  //   afterEach(() => {
  //     sandbox.restore();
  //   })
      
  //   it('GetAll é chamado com status X', async () => {
  //     await Controller.att(req, res)
  //     chai.expect(res.status.calledWith(404)).to.be.equal(false);
  //   })
  // })
})