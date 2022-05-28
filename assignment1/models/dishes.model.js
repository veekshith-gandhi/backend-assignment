/** @format */

const mongoose = require("mongoose");

const DisheSchema = new mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Restaurant",
  },
  locationId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Locations",
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
  dish: { type: String, required: true },
});

const Dishe = mongoose.model("dishes", DisheSchema);

module.exports = Dishe;
