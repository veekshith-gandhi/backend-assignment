/** @format */

const mongoos = require("mongoose");

const RestaurantSchema = new mongoos.Schema({
  restaurantName: { type: String },
});
