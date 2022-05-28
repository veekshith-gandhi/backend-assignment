/** @format */

const mongoos = require("mongoose");

const RestaurantSchema = new mongoos.Schema({
  restaurantName: { type: String },
});

const Restaurant = mongoos.model("restaurantes", RestaurantSchema);

module.exports = Restaurant;
