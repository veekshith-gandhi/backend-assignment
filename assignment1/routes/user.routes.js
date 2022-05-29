/** @format */

const {
  register,
  addToCart,
  checkout,
  recivedOrder,
} = require("../controller/user.controller");

const router = require("express").Router();

router.post("/register", register);
router.post("/add/cart/:id", addToCart);
router.get("/checkout/:id", checkout);
router.get("/recieved/:id", recivedOrder);

module.exports = router;
