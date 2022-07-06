const chai = require('chai');
const sandbox = require("sinon").createSandbox();

const Service = require('../../../../services/productsService');
const Model = require('../../../../models/productsModel');

const Mocks = require('../../productsMocks');

describe('Products - Service', () => {
  const q = 'mar'
  describe('sem erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'getBySearch').resolves(Mocks.resGetBySearch);
    })
    afterEach(() => {
      sandbox.restore();
    })

    it('getBySearch', async () => {
      const result = await Service.getBySearch(q)
      chai.expect(result).to.be.a('array') 
    })   
})
  describe('caso haja erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'getBySearch').resolves(null);
    });
    afterEach(() => {
      sandbox.restore();
    })

    it('getBySearch', async () => {
      const result = await Service.getBySearch(q)
      chai.expect(result).to.be.equal(null);
    })
})
})