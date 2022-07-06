const chai = require('chai')
const sandbox = require("sinon").createSandbox();

const Sales = require('../../../../models/salesModel');
const connection = require('../../../../helpers/connection');
const Mocks = require('../../salesMocks');

describe('Sales - Model', () => {
  beforeEach(() => {
    sandbox.stub(connection, 'execute').resolves([[Mocks.resAtt]]);
  })
  afterEach(() => {
    sandbox.restore();
  })
  it('att', async () => {
    const id = 1;
    const result = await Sales.att(id, Mocks.reqAtt);
    chai.expect(result).to.be.a('object');
  })
})