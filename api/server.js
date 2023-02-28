const express = require("express");

const app = express();

app.use(express.json());

const CarRouter = require("./cars/cars-router");

app.use("/api/cars", CarRouter);

module.exports = app;
