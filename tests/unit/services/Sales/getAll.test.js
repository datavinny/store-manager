const chai = require('chai');
const sandbox = require("sinon").createSandbox();

const Service = require('../../../../services/salesService');
const Model = require('../../../../models/salesModel');

const Mocks = require('../../salesMocks');

describe('Sales - Services', () => {
  describe('sem erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'getAll').resolves(Mocks.resGetAll);
    })
    afterEach(() => {
      sandbox.restore();
    })

    it('getAll', async () => {
      const result = await Service.getAll();
      chai.expect(result).to.be.a('array');
    })
  })
  describe('com erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'getAll').resolves(null);
    });
    afterEach(() => {
      sandbox.restore()
    })

    it('getAll', async () => {
      const result = await Service.getAll();
      chai.expect(result).to.be.equal(null);
    })
  })
})