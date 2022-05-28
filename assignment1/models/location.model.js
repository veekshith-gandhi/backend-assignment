/** @format */

const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  restaurantId: { type: mongoose.Schema.Types.ObjectId, required: true },
  location: { type: String },
});

const Locations = mongoose.model("locations", LocationSchema);

module.exports = Locations;
