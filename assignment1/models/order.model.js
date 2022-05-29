/** @format */

const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  cartId: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
    required: true,
    ref: "Cart",
  },
});

const Order = mongoose.model("orders", OrderSchema);

module.exports = Order;
