/** @format */

const Order = require("../models/order.model");

const orderFood = async (req, res) => {
  let MESSAGE = "Order ACcepted";
  try {
    const result = await Order.create({
      cartId: req.body.cartId,
    });
    if (result) {
      return res.status(201).send({ MESSAGE });
    }
    return res.status(401).send({ msg: "Not Added" });
  } catch (error) {
    return res.status(401).send({ msg: "Something went wrong", error });
  }
};

module.exports = orderFood;
