/** @format */

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
  description: { type: String },
  category: { type: String },
  isAvailable: { type: Boolean, default: true },
});

const Book = mongoose.model("books", bookSchema);

module.exports = Book;
