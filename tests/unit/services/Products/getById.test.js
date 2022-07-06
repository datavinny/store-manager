const chai = require('chai');
const sandbox = require("sinon").createSandbox();

const Service = require('../../../../services/productsService');
const Model = require('../../../../models/productsModel');

const Mocks = require('../../productsMocks');

describe('Products - Service', () => {
  describe('sem erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'getById').resolves(Mocks.resGetById);
    })
    afterEach(() => {
      sandbox.restore();
    })
    
    it('getById', async () => {
      const id = 0;
      const result = await Service.getById(id)
      chai.expect(result).to.have.a.property('name')
    })
})
  describe('caso haja erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'getById').resolves(null);
    });
    afterEach(() => {
      sandbox.restore();
    })

    it('getById', async () => {
      const id = 0;
      const result = await Service.getById(id)
      chai.expect(result).to.be.equal(null);
    })
})
})