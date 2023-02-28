const Cars = require("./cars-model");
const checkCarId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const cars = await Cars.getAll();
    const car = cars.find((i) => i.id == id);
    if (car) {
      next();
    } else {
      return res.status(400).json({ message: "VERİLEN IDLI ARAC BULUNAMADI" });
    }
  } catch (error) {}
};

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage, title, transmission } = req.body;
  try {
    if (!vin || !make || !mileage || !model) {
      res.status(400).json({ mesaj: "<alan adı> eksik" });
    } else {
      next();
    }
  } catch (error) {}
};

const checkVinNumberValid = async (req, res, next) => {
  const { vin } = req.body;
  const cars = await Cars.getAll();
  const check = cars.find((i) => i.vin == vin);
  if (check) {
    next();
  } else {
    return res.status(400).json({ mesaj: "vin <vin numarası> geçersizdir" });
  }
};

const checkVinNumberUnique = async (req, res, next) => {
  const { vin } = req.body;
  const cars = await Cars.getAll();
  const check = cars.find((i) => i.vin == vin);
  if (check) {
    return res.status(400).json({ mesaj: "vin <vin numarası> zaten var" });
  } else {
    next();
  }
};
module.exports = {
  checkVinNumberUnique,
  checkVinNumberValid,
  checkCarPayload,
  checkCarId,
};
