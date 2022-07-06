const chai = require('chai');
const sandbox = require("sinon").createSandbox();

const Service = require('../../../../services/salesService');
const Model = require('../../../../models/salesModel');

const Mocks = require('../../salesMocks');

describe('Sales - Services', () => {
  const id = 1;
  describe('sem erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'att').resolves(Mocks.resAtt);
    })
    afterEach(() => {
      sandbox.restore();
    })

    it('att', async () => {
      const result = await Service.att(id, Mocks.reqAtt)
      chai.expect(result).to.be.a('object')
    })
  })
  describe('com erros no Model', () => {
    beforeEach(() => {
      sandbox.stub(Model, 'att').resolves(null);
    });
    afterEach(() => {
      sandbox.restore();
    })

    it('att', async () => {
    const result = await Service.att(id, Mocks.reqAtt)
    chai.expect(result).to.be.equal(null);
    })
  })
})