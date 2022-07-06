const chai = require('chai');
const sandbox = require("sinon").createSandbox();

const Service = require('../../../../services/salesService');
const Model = require('../../../../models/salesModel');

const Mocks = require('../../salesMocks');

describe('Sales - Services', () => {
  describe('sem erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'getById').resolves(Mocks.resGetById);
    })
    afterEach(() => {
      sandbox.restore();
    })

    it('getById', async () => {
      const id = 0;
      const result = await Service.getById(id);
      chai.expect(result).to.be.a('object');
    })
  })
  describe('com erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'getById').resolves(null);
    });
    afterEach(() => {
      sandbox.restore();
    })
    
    it('getById', async () => {
    const id = 0;
    const result = await Service.getById(id);
    chai.expect(result).to.be.equal(null);
    })
  })
})