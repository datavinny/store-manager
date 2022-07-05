const chai = require('chai');
const sandbox = require("sinon").createSandbox();

const Service = require('../../../../services/salesService');
const Model = require('../../../../models/salesModel');

const Mocks = require('../../salesMocks');

describe('Sales - Services', () => {
  describe('sem erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'fnDelete').resolves(Mocks.allSales)
    })
    afterEach(() => {
      sandbox.restore()
    })

    it('fnDelete', async () => {
      const id = 1
      const result = await Service.fnDelete(id)
      chai.expect(result).to.be(false)
    })
  })
  describe('com erros no Model', () => {
      beforeEach(() => {
        sandbox.stub(Model, 'fnDelete')
          .rejects();
      });
    afterEach(() => {
      sandbox.restore()
    })
    
    it('fnDelete', async () => {
      const id = 1
      const result = await Service.fnDelete(id)
      chai.expect(result).to.be.equal(null);
    })
  })
})