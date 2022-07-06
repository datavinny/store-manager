const chai = require('chai')
const sandbox = require("sinon").createSandbox();

const Model = require('../../../../models/productsModel');
const connection = require('../../../../helpers/connection');
const Mocks = require('../../productsMocks');

describe('Products - Model', () => {
  beforeEach(() => {
    sandbox.stub(connection, 'execute').resolves([[Mocks.allProducts]]);
  })
  afterEach(() => {
    sandbox.restore();
  })
  
  it('create', async () => {
    const name = "Davi";
    const result = await Model.create(name);
    const mock = { id: result.id, name };
    chai.expect(result).to.be.deep.equal(mock);
  })
});