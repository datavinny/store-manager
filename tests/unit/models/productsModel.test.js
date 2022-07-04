const chai = require('chai')
const sinon = require('sinon');

const ProductsModel = require('../../../models/productsModel');

describe('Products Models - testa o resultado de sucesso', () => {
  beforeEach(sinon.restore);
  it('getAll', async () => {
    const result = await ProductsModel.getAll()
   chai.expect(result).to.be.a('array')
  })

  it('getById', async () => {
    const id = 1;
    const result = await ProductsModel.getById(id)
   chai.expect(result).to.be.a('object')
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
    const result = await ProductsModel.getBySearch(q)
    chai.expect(result).to.be.a('array') 
  })
});