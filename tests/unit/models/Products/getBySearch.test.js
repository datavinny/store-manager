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
  
  it('getBySearch', async () => {
    const q = 'Traje'
    const result = await Model.getBySearch(q)
    chai.expect(result).to.be.a('array') 
  })
});