const { expect } = require('chai');
const sinon = require('sinon');

const ProductsController = require('../../../controllers/productsController');

describe('ProductsController', () => {
describe('chamada corretamente', () => {
  const req = {}
  const res = {}
  it('A função getAll é chamada com o status 200 caso não ocorra erros', async () => {
    await ProductsController.getAll(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
  })
  // it('é chamado o send mock_db', async () => {
  //   const mock_db = [
  //     { id: 1, name: 'Martelo de Thor' },
  //     { id: 2, name: 'Traje de encolhimento' },
  //     { id: 3, name: 'Escudo do Capitão América' }
  //   ];
  //   await ProductsController.getAll(req, res);

  //   expect(res.send.calledWith()).to.be.equal(mock_db);
  // });
})
})
