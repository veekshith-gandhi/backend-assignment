/** @format */

const { addLocation } = require("../controller/location.controller");

const router = require("express").Router();

router.post("/", addLocation);

module.exports = router;
