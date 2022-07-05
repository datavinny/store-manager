const chai = require('chai');
const sandbox = require("sinon").createSandbox();

const Service = require('../../../../services/productsService');
const Model = require('../../../../models/productsModel');

const Mocks = require('../../productsMocks');

describe('Products - Service', () => {
  describe('sem erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'create').resolves(Mocks.resCreate)
    })
    afterEach(() => {
      sandbox.restore()
    })

    it('create', async () => {
      const result = await Service.create(Mocks.reqCreate.name)
      const resultado = { id: result.id, name: Mocks.reqCreate.name };
     chai.expect(result).to.be.deep.equal(resultado)
    })
})
  describe('caso haja erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'create').rejects();
    });
    afterEach(() => {
      sandbox.restore()
    })
    
    it('create', async () => {
      const result = await Service.create(Mocks.reqCreate.name)
      chai.expect(result).to.be.equal(null);
    })
})
})