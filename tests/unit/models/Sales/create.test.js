const chai = require('chai')
const sandbox = require("sinon").createSandbox();

const Sales = require('../../../../models/salesModel');
const connection = require('../../../../helpers/connection');
const Mocks = require('../../salesMocks');

describe('Sales - Model', () => {
  beforeEach(() => sandbox.stub(connection, 'query').resolves(Mocks.allSales))
  afterEach(() => sandbox.restore())
  it('create', async () => {
    const result = await Sales.create(Mocks.create)
    chai.expect(result).to.be.a('array')
  })
})