const express = require("express");
const mw = require("./cars-middleware");
const Cars = require("./cars-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const cars = await Cars.getAll();
  return res.status(200).json(cars);
});
router.get("/:id", mw.checkCarId, async (req, res, next) => {
  const { id } = req.params;
  const car = await Cars.getById(id);
  return res.status(200).json(car);
});
router.post(
  "/",
  mw.checkCarPayload,
  mw.checkVinNumberUnique,
  async (req, res, next) => {
    const { vin, make, model, mileage, title, transmission } = req.body;
    Cars.create({
      vin,
      make,
      model,
      mileage,
      title,
      transmission,
    })
      .then((r) => {
        return res.status(200).json(r);
      })
      .catch((err) => {
        res.status(400).json({ message: "HATA" });
      });
  }
);

module.exports = router;
