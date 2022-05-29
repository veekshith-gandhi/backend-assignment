/** @format */

const Cart = require("../models/cart.model");

const updateToCart = async (req, res) => {
  try {
    const result = await Cart.create({
      disheId: req.body.disheId,
      restaurantId: req.body.restaurantId,
    });
    if (result) return res.status(201).send({ msg: "added", result });
    return res.status(401).send({ msg: "Not added" });
  } catch (error) {
    return res.status(401).send({ msg: "Something went wrong", error });
  }
};

module.exports = updateToCart;
