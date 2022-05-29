/** @format */

const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  disheId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Dishe",
  },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Restaurant",
  },
  // quantity: { type: Number, default: 1 },
});

const Cart = mongoose.model("carts", CartSchema);

module.exports = Cart;
