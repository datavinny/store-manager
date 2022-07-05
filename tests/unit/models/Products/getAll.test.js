const chai = require('chai')
const sandbox = require("sinon").createSandbox();

const Model = require('../../../../models/productsModel');
const connection = require('../../../../helpers/connection');
const Mocks = require('../../productsMocks');

describe('Products - Model', () => {
  beforeEach(() => sandbox.stub(connection, 'query').resolves(Mocks.allProducts))
  afterEach(() => sandbox.restore())
  
  it('getAll', async () => {
    const result = await Model.getAll()
   chai.expect(result).to.be.a('array')
  })
});