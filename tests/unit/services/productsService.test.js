// const chai = require('chai');
// const sinon = require('sinon');

// const ProductsService = require('../../../services/productsService');
// const ProductsModel = require('../../../models/productsModel');

// describe('Products Services', () => {
//   beforeEach(sinon.restore)

//   it('Testa a função getAll retorna NULL caso tenha erro na database', async () => {
//     const result = await ProductsService.getAll()
//     chai.expect(result).to.be.equal(null);
//     })
//   it('Testa a função getById retorna NULL caso o ID não exista ou tenha erro na database', async () => {
//     const id = 1;
//     const result = await ProductsService.getById(id)
//     chai.expect(result).to.be.equal(null);
//   })
// })