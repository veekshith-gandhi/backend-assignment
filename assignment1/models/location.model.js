/** @format */

const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  locationName: { type: String, trim: true, required: true },
  restaurant: {
    type: String,
    trim: true,
    required: true,
  },
});

const Locations = mongoose.model("locations", LocationSchema);

module.exports = Locations;
