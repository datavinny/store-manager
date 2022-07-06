const chai = require('chai');
const sandbox = require("sinon").createSandbox();

const Service = require('../../../../services/salesService');
const Model = require('../../../../models/salesModel');

const Mocks = require('../../salesMocks');

describe('Sales - Services', () => {
  describe('sem erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'create').resolves(Mocks.resCreate);
    })
    afterEach(() => {
      sandbox.restore();
    })

    it('create', async () => {
      const result = await Service.create(Mocks.reqCreate)
      chai.expect(result).to.be.a('object')
    })
  })
  describe('com erros no Model', () => {
      beforeEach(() => {
        sandbox.stub(Model, 'create').resolves(null);
      });
    afterEach(() => {
      sandbox.restore();
    })

    it('create', async () => {
    const result = await Service.create(Mocks.reqCreate)
    chai.expect(result).to.be.equal(null);
    })
  })
})