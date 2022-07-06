const chai = require('chai');
const sandbox = require("sinon").createSandbox();

const Service = require('../../../../services/salesService');
const Model = require('../../../../models/salesModel');

const Mocks = require('../../salesMocks');

describe('Sales - Services', () => {
  const id = 1
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
  describe('com erros no Model', () => {
      beforeEach(() => {
        sandbox.stub(Model, 'fnDelete').resolves(null);;
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