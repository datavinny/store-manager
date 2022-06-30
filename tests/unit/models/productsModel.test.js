const { expect } = require('chai')

const { getAll, getById } = require('../../../models/productsModel');

describe('productsModels', () => {
  it('função getAll', async () => {
    const mock_db = [
    { id: 1, name: 'Martelo de Thor' },
    { id: 2, name: 'Traje de encolhimento' },
    { id: 3, name: 'Escudo do Capitão América' }
    ]
    const result = await getAll()
    expect(result).to.have.deep.ordered.members(mock_db);
  })
    it('função getById', async () => {
    const mock_produto = { id: 1, name: 'Martelo de Thor' };
    const id = 1;
    const result = await getById(id)
    expect(result).to.be.deep.equal(mock_produto);
  })
})