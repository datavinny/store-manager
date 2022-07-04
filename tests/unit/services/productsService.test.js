const chai = require('chai');
const sinon = require('sinon');

const ProductsService = require('../../../services/productsService');
const ProductsModel = require('../../../models/productsModel');
describe('Products Services', () => {
  describe('quando não ocorre erros', () => {
    beforeEach(sinon.restore);
  it('getAll', async () => {
    const result = await ProductsService.getAll()
   chai.expect(result).to.be.a('array')
  })

  it('getById', async () => {
    const id = 1;
    const result = await ProductsService.getById(id)
   chai.expect(result).to.have.a.property('name')
  })

  it('create', async () => {
    const name = "Davi";
    const result = await ProductsService.create(name)
    const mock = { id: result.id, name };
   chai.expect(result).to.be.deep.equal(mock)
  })

  it('att', async() => {
    const id = 1;
    const name = "Loki";
    const result = await ProductsService.att(id, name)
    const mock = { id, name };
    chai.expect(result).to.be.deep.equal(mock)
  })

  it('fnDelete', async () => {
    const id = 1
    const result = await ProductsService.fnDelete(id)
    chai.expect(result).to.be();
  })
  
  it('getBySearch', async () => {
    const q = 'Traje'
    const result = await ProductsService.getBySearch(q)
    chai.expect(result).to.be.a('array') 
  })
})
  describe('quando ocorre erros', () => {
    before(() => {
      sinon.stub(ProductsModel, 'getAll')
        .resolves(undefined);
      sinon.stub(ProductsModel, 'getById')
        .resolves(undefined);
      sinon.stub(ProductsModel, 'create')
        .resolves(undefined);
      sinon.stub(ProductsModel, 'att')
        .resolves(undefined);
      sinon.stub(ProductsModel, 'fnDelete')
        .resolves(undefined);
      sinon.stub(ProductsModel, 'getBySearch')
        .resolves(undefined);
      
    });
  it('getAll', async () => {
    const result = await ProductsService.getAll()
   chai.expect(result).to.be.equal(null);
  })

  it('getById', async () => {
    const result = await ProductsService.getById(1)
   chai.expect(result).to.be.equal(null);
  })

  it('create', async () => {
    const result = await ProductsService.create("Davi")
   chai.expect(result).to.be.equal(null);
  })

    it('att', async () => {
    const id = 1;
    const name = "Loki";
    const result = await ProductsService.att(id, name)
    chai.expect(result).to.be.equal(null);
  })

  it('fnDelete', async () => {
    const id = 1
    const result = await ProductsService.fnDelete(id)
    chai.expect(result).to.be.equal(null);
  })
  
  it('getBySearch', async () => {
    const result = await ProductsService.getBySearch('Traje')
    chai.expect(result).to.be.equal(null);
  })
})
})
