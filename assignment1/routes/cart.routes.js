/** @format */

const updateToCart = require("../controller/cart.controller");

const router = require("express").Router();

router.post("/", updateToCart);

module.exports = router;
