const chai = require('chai');
const sandbox = require("sinon").createSandbox();

const Service = require('../../../../services/salesService');
const Model = require('../../../../models/salesModel');

const Mocks = require('../../salesMocks');

describe('Sales - Services', () => {
  describe('sem erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'create').resolves(Mocks.allSales)
    })
    afterEach(() => {
      sandbox.restore()
    })

    it('create', async () => {
      const result = await Service.create(Mocks.allSales)
      chai.expect(result).to.be.a('array')
    })
  })
  describe('com erros no Model', () => {
      beforeEach(() => {
        sandbox.stub(Model, 'create')
          .rejects();
      });
    afterEach(() => {
      sandbox.restore()
    })

    it('create', async () => {
    const result = await Service.create(Mocks.createSales)
    chai.expect(result).to.be.equal(null);
    })
  })
})