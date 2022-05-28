/** @format */

const { addCategory } = require("../controller/category.controller");

const router = require("express").Router();

router.post("/", addCategory);

module.exports = router;
