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
      sandbox.stub(Model, 'att').resolves(Mocks.resAtt);
    })
    afterEach(() => {
      sandbox.restore();
    })

    it('att', async() => {
      const result = await Service.att(id, name);
      chai.expect(result).to.be.deep.equal(Mocks.resAtt);
    })
})
  describe('caso haja erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'att').resolves(undefined);
    });
    afterEach(() => {
      sandbox.restore();
    })

    it('att', async () => {
      const result = await Service.att(id, name);
      chai.expect(result).to.be.equal(null);
    })
})
})