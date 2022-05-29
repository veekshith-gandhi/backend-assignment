/** @format */

const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({
  bookInfo: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
    issueDate: { type: Date, default: Date.now() },
    returnDate: { type: Date, default: Date.now() + 7 * 24 * 60 * 60 * 1000 },
    renewed: { type: Boolean, default: false },
  },
  userInfo: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: { type: String },
  },
});

const Issue = mongoose.model("issues", IssueSchema);
module.exports = Issue;
