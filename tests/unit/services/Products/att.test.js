const chai = require('chai');
const sandbox = require("sinon").createSandbox();

const Service = require('../../../../services/productsService');
const Model = require('../../../../models/productsModel');

const Mocks = require('../../productsMocks');

describe('Products - Service', () => {
  const id = 1;
  const name = "Loki";
  describe('sem erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'att').resolves(Mocks.resGetAll)
    })
    afterEach(() => {
      sandbox.restore()
    })

    it('att', async() => {
      const result = await Service.att(id, name)
      const resultado = { id, name };
      chai.expect(result).to.be.deep.equal(resultado)
    })
})
  describe('caso haja erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'att').resolves();
    });
    afterEach(() => {
      sandbox.restore()
    })

    it('att', async () => {
      const result = await Service.att(id, name)
      chai.expect(result).to.be.equal(null);
    })
})
})