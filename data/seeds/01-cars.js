// ESNEK
exports.seed = function (knex, Promise) {
  return knex("cars").insert([
    { vin: "123", make: "SKODA", model: "2013", mileage: "70000" },
  ]);
};
