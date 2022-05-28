/** @format */

const mongoos = require("mongoose");

const LocationSchema = new mongoos.Schema({
  restaurantId: { type: String, required: true },
  location: { type: String },
});
