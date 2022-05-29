/** @format */

const listAllDishes = require("../controller/dishes.controller");

const router = require("express").Router();

router.get("/", listAllDishes);
module.exports = router;
