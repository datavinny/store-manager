const allProducts = [
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Traje de encolhimento",
  },
  {
    id: 3,
    name: "Escudo do Capitão América",
  }
];

const resGetAll = [...allProducts];
const resGetById = allProducts[0];
const resAtt = {
  id: 1,
  name: "Martelo do Batman"
};
const resGetBySearch = [
  {
    id: 1,
    name: "Martelo de Thor",
  }
];
const reqAtt = { name: "Martelo do Batman" };
const reqCreate = { name: "Davi" };
const resCreate = { id: 4, name: "Davi" };

module.exports = {
  resGetAll,
  resGetById,
  resCreate,
  reqCreate,
  resGetBySearch,
  resAtt,
  reqAtt,
};