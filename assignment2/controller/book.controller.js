/** @format */

const Book = require("../models/book.model");

const addBook = async (req, res) => {
  console.log(req.body);
  try {
    const result = await Book.create({
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      category: req.body.category,
    });
    if (result) return res.status(201).send({ msg: "created", result });
  } catch (error) {
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

const getByCategory = async (req, res) => {
  try {
    const result = await Book.find({
      category: req.query.category,
    });
    if (result) return res.status(201).send({ msg: "created", result });
  } catch (error) {
    return res.status(500).send({ msg: "something went wrong", error });
  }
};

module.exports = { addBook, getByCategory };
