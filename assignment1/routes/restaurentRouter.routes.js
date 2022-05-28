/** @format */

const { addRestaurent } = require("../controller/restaurent.controller");

const router = require("express").Router();

router.post("/", addRestaurent);

module.exports = router;
