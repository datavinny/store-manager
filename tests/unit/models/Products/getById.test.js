const chai = require('chai')
const sandbox = require("sinon").createSandbox();

const Model = require('../../../../models/productsModel');
const connection = require('../../../../helpers/connection');
const Mocks = require('../../productsMocks');

describe('Products - Model', () => {
  beforeEach(() => {
    sandbox.stub(connection, 'execute').resolves([[Mocks.resGetById]])
  })
    afterEach(() => {
      sandbox.restore();
    })
  
  it('getById', async () => {
    const id = 1;
    const result = await Model.getById(id);
    chai.expect(result).to.be.a('object');
  })
});