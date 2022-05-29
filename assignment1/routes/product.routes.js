/** @format */

const addProduct = require("../controller/product.controller");

const router = require("express").Router();

router.post("/:id", addProduct);
module.exports = router;
