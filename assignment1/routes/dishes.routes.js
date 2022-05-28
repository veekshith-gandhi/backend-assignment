/** @format */

const { addDishe, getDishes } = require("../controller/dishes.controller");

const router = require("express").Router();

router.post("/", addDishe);
router.get("/", getDishes);

module.exports = router;
