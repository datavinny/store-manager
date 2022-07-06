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
  
  it('att', async() => {
    const id = 1;
    const name = "Loki";
    const result = await Model.att(id, name);
    const mock = { id, name };
    chai.expect(result).to.be.deep.equal(mock);
  })
});