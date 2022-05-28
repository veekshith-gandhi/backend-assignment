/** @format */

const mongoose = require("mongoose");

const DishesSchema = new mongoose.Schema({
  restaurantId: { type: String, required: true },
  locationId: { type: String, required: true },
  categoryId: { type: String, required: true },
  dish: { type: String, required: true },
});
