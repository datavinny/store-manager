const chai = require('chai');
const sandbox = require("sinon").createSandbox();

const Service = require('../../../../services/productsService');
const Model = require('../../../../models/productsModel');

const Mocks = require('../../productsMocks');

describe('Products - Service', () => {
  const id = 1;
  describe('sem erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'fnDelete').resolves(true)
    })
    afterEach(() => {
      sandbox.restore()
    })

    it('fnDelete', async () => {
      const result = await Service.fnDelete(id)
      chai.expect(result).to.be();
    })
})
  describe('caso haja erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'fnDelete').rejects();
    });
    afterEach(() => {
      sandbox.restore();
    })
    it('fnDelete', async () => {
      const result = await Service.fnDelete(id)
      chai.expect(result).to.be.equal(null);
    })
})
})