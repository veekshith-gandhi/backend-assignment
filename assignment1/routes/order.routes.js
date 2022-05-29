/** @format */

const orderFood = require("../controller/order.controller");

const router = require("express").Router();

router.post("/", orderFood);

module.exports = router;
