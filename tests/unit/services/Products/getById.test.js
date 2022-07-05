const chai = require('chai');
const sandbox = require("sinon").createSandbox();

const Service = require('../../../../services/productsService');
const Model = require('../../../../models/productsModel');

const Mocks = require('../../productsMocks');

describe('Products - Service', () => {
  const id = 1;
  describe('sem erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'getById').resolves(Mocks.resGetById)
    })
    afterEach(() => {
      sandbox.restore()
    })
    
    it('getById', async () => {
      const result = await Service.getById(id)
      chai.expect(result).to.have.a.property('name')
    })
})
  describe('caso haja erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'getById').rejects();
    });
    afterEach(() => {
      sandbox.restore()
    })

    it('getById', async () => {
      const result = await Service.getById(id)
      chai.expect(result).to.be.equal(null);
    })
})
})