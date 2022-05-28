/** @format */

const { addDishe } = require("../controller/dishes.controller");

const router = require("express").Router();

router.post("/", addDishe);

module.exports = router;
