const chai = require('chai');
const sandbox = require("sinon").createSandbox();

const Service = require('../../../../services/productsService');
const Model = require('../../../../models/productsModel');

const Mocks = require('../../productsMocks');

describe('Products - Service', () => {
  describe('sem erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'getAll').resolves(Mocks.resGetAll)
    })
    afterEach(() => {
      sandbox.restore()
    })

    it('getAll', async () => {
      const result = await Service.getAll()
      chai.expect(result).to.be.a('array')
    })
})
  describe('caso haja erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'getAll').rejects();
    });
    afterEach(() => {
      sandbox.restore()
    })
    it('getAll', async () => {
      const result = await Service.getAll()
      chai.expect(result).to.be.equal(null);
    })
})
})