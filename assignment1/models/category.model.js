/** @format */

const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  restaurantId: { type: mongoose.Schema.Types.ObjectId },
  category: { type: String },
});

const Category = mongoose.model("categories", CategorySchema);

module.exports = Category;
