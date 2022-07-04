const chai = require('chai')
const sinon = require('sinon');

const ProductsModel = require('../../../models/productsModel');

describe('Products Models - testa o resultado de sucesso', () => {
  it('getAll', async () => {
    const mock = [
      {
        "id": 1,
        "name": "Martelo de Thor"
      },
      {
        "id": 2,
        "name": "Traje de encolhimento"
      },
      {
        "id": 3,
        "name": "Escudo do Capitão América"
      }
    ];
    const result = await ProductsModel.getAll()
   chai.expect(result).to.include.deep.members(mock)
  })
  it('getById', async () => {
    const id = 1;
    const mock = {
        "id": 1,
        "name": "Martelo de Thor"
      };
    const result = await ProductsModel.getById(id)
   chai.expect(result).to.be.deep.equal(mock)
  })
  it('create', async () => {
    const name = "Davi";
    const result = await ProductsModel.create(name)
    const mock = { id: result.id, name };
   chai.expect(result).to.be.deep.equal(mock)
  })
  it('att', async() => {
    const id = 1;
    const name = "Loki";
    const result = await ProductsModel.att(id, name)
    const mock = { id, name };
    chai.expect(result).to.be.deep.equal(mock)
  })
  it('fnDelete', async () => {
    const id = 1
    const result = await ProductsModel.fnDelete(id)
    chai.expect(result).to.be();
  })
  it('getBySearch', async () => {
    const q = 'Traje'
    const mock = [
      {
        "id": 2,
        "name": "Traje de encolhimento"
      }
    ];
    const result = await ProductsModel.getBySearch(q)
    chai.expect(result).to.include.deep.members(mock) 
  })
})