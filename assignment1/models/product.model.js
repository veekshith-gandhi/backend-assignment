/** @format */

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  restaurant: { type: String, trim: true, required: true },
  dish: { type: String, trim: true, required: true },
  category: { type: String, trim: true, required: true },
  price: { type: Number, required: true },
});

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;
