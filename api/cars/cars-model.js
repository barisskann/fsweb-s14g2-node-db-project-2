const db = require("../../data/db-config");

const getAll = () => {
  return db("cars");
};

const getById = (id) => {
  return db("cars").where({ id }).first();
};

const create = (post) => {
  return db("cars")
    .insert(post)
    .then((r) => getById(r[0]));
};

module.exports = { getAll, getById, create };
