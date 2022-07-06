const chai = require('chai');
const sandbox = require("sinon").createSandbox();

const Service = require('../../../../services/productsService');
const Model = require('../../../../models/productsModel');

describe('Products - Service', () => {
  const id = 1;
  describe('sem erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'fnDelete').resolves(true);
    })
    afterEach(() => {
      sandbox.restore();
    })

    it('fnDelete', async () => {
      const result = await Service.fnDelete(id);
      chai.expect(result).to.not.be.equal(null);
    })
})
  describe('caso haja erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'fnDelete').resolves(false);
    });
    afterEach(() => {
      sandbox.restore();
    })
    it('fnDelete', async () => {
      const result = await Service.fnDelete(id);
      chai.expect(result).to.be.equal(null);
    })
})
})