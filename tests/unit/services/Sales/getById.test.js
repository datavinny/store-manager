const chai = require('chai');
const sandbox = require("sinon").createSandbox();

const Service = require('../../../../services/salesService');
const Model = require('../../../../models/salesModel');

const Mocks = require('../../salesMocks');

describe('Sales - Services', () => {
  describe('sem erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'getById').resolves(Mocks.resGetById)
    })
    afterEach(() => {
      sandbox.restore()
    })

    it('getById', async () => {
      const id = 1;
      const result = await Service.getById(id)
      chai.expect(result).to.be.a('array')
    })
  })
  describe('com erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'getById').rejects();
    });
    afterEach(() => {
      sandbox.restore()
    })
    
    it('getById', async () => {
    const result = await Service.getById(1)
    chai.expect(result).to.be.equal(null);
    })
  })
})