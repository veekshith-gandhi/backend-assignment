/** @format */

const Book = require("../models/book.model");

const addBook = async (req, res) => {
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
  const { author } = req.query;
  if (author) {
    try {
      const result = await Book.find(
        {
          author: req.query.author,
        },
        { title: 1, author: 1, _id: 0 }
      );
      if (result) return res.status(201).send({ msg: "created", result });
    } catch (error) {
      return res.status(500).send({ msg: "something went wrong", error });
    }
  } else {
    try {
      const result = await Book.find(
        {
          category: req.query.category,
        },
        { title: 1, _id: 0 }
      );
      if (result) return res.status(201).send({ msg: "created", result });
    } catch (error) {
      return res.status(500).send({ msg: "something went wrong", error });
    }
  }
};

module.exports = { addBook, getByCategory };
