/** @format */

const mongoos = require("mongoose");

const CategorySchema = new mongoos.Schema({
  category: { type: String },
});
