/** @format */

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    cart: [
      { product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" } },
      { quantity: { type: Number, default: 1 } },
    ],
    name: { type: String },
    isAdmin: { type: Boolean, default: false },
    details: { type: Object },
  },
  { timestamps: true }
);

const User = mongoose.model("users", UserSchema);
module.exports = User;
