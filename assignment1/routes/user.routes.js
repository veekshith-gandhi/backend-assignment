/** @format */

const register = require("../controller/user.controller");

const router = require("express").Router();

router.post("/", register);
module.exports = router;
