const chai = require('chai')
const sandbox = require("sinon").createSandbox();

const Sales = require('../../../../models/salesModel');
const connection = require('../../../../helpers/connection');
const Mocks = require('../../salesMocks');

describe('Sales - Model', () => {
  beforeEach(() => sandbox.stub(connection, 'query').resolves(Mocks.allSales))
  afterEach(() => sandbox.restore())
  it('att', async () => {
    const id = 1;
    const mock = [
      {
        "productId": 1,
        "quantity": 10
      },
      {
        "productId": 2,
        "quantity": 50
      }
    ];
    const result = await Sales.att(id, mock)
    chai.expect(result).to.be.a('array')
  })
})