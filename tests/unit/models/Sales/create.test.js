const chai = require('chai')
const sandbox = require("sinon").createSandbox();

const Sales = require('../../../../models/salesModel');
const connection = require('../../../../helpers/connection');
const Mocks = require('../../salesMocks');

describe('Sales - Model', () => {
  beforeEach(() => {
    sandbox.stub(connection, 'execute').resolves([[Mocks.resCreate]]);
  })
  afterEach(() => {
    sandbox.restore();
  })
  it('create', async () => {
    const result = await Sales.create(Mocks.reqCreate);
    chai.expect(result).to.be.a('object')
  })
})