const chai = require('chai');
const sandbox = require("sinon").createSandbox();

const Service = require('../../../../services/salesService');
const Model = require('../../../../models/salesModel');

const Mocks = require('../../salesMocks');

describe('Sales - Services', () => {
  describe('sem erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'att').resolves(Mocks.allSales)
    })
    afterEach(() => {
      sandbox.restore()
    })

    it('att', async () => {
      const id = 1;
      const result = await Service.att(id, Mocks.attSales)
      chai.expect(result).to.be.a('array')
    })
  })
  describe('com erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'att')
        .rejects();
    });
    afterEach(() => {
      sandbox.restore()
    })

    it('att', async () => {
    const id = 1;
    const result = await Service.att(id, Mocks.attSales)
    chai.expect(result).to.be.equal(null);
    })
  })
})