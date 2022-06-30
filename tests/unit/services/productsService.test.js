const { expect } = require('chai');
const sinon = require('sinon');

const ProductsService = require('../../../services/productsService');
const ProductsModel = require('../../../models/productsModel');

describe('productsServices', () => {
describe('Testa se funciona sem erros na db', () => {
  it('Testa a função getAll', async () => {
    const mock_db = [
    { id: 1, name: 'Martelo de Thor' },
    { id: 2, name: 'Traje de encolhimento' },
    { id: 3, name: 'Escudo do Capitão América' }
    ]
    const result = await ProductsService.getAll()
    expect(result).to.have.deep.ordered.members(mock_db);
  })
  it('Testa a função getById, passando um id valido', async () => {
    const mock_produto = { id: 1, name: 'Martelo de Thor' };
    const id = 1;
    const result = await ProductsService.getById(id)
    expect(result).to.be.deep.equal(mock_produto);
  })
})
describe('Testa se "funciona" com erros na db', () => {
    before(() => {
    sinon.stub(ProductsModel, 'getAll')
      .resolves(null);
    sinon.stub(ProductsModel, 'getById')
      .resolves(null);
  });
  // Restauraremos a função `getAll` original após os testes.
  after(() => {
    ProductsModel.getAll.restore();
    ProductsModel.getById.restore();
  });

  it('Testa a função getAll retorna NULL caso tenha erro na database', async () => {
    const result = await ProductsService.getAll()
    expect(result).to.be.equal(null);
  })
  it('Testa a função getById retorna NULL caso o ID não exista ou tenha erro na database', async () => {
    const id = 1;
    const result = await ProductsService.getById(id)
    expect(result).to.be.equal(null);
  })
})
})