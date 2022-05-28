/** @format */

const mongoose = require("mongoose");

const DisheSchema = new mongoose.Schema({
  restaurantId: { type: mongoose.Schema.Types.ObjectId, required: true },
  locationId: { type: mongoose.Schema.Types.ObjectId, required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, required: true },
  dish: { type: String, required: true },
});

const Dishe = mongoose.model("dishes", DisheSchema);

module.exports = Dishe;
