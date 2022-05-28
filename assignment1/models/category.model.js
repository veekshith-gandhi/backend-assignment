/** @format */

const mongoos = require("mongoose");

const CategorySchema = new mongoos.Schema({
  restaurantId: { type: String },
  dishId: { type: String },
  category: { type: String },
});
