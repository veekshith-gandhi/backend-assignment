/** @format */

const User = require("../models/user.model");

const register = async (req, res) => {
  try {
    const result = await User.create({
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

module.exports = register;
