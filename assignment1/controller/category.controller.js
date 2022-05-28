/** @format */

const Category = require("../models/category.model");

const addCategory = async (req, res) => {
  try {
    const name = await Category.create({
      restaurantId: req.body.restaurantId,
      category: req.body.category,
    });
    if (name) return res.status(201).send({ msg: "created" });
    return res.status(401).send({ msg: "Not created" });
  } catch (error) {
    return res.status(401).send({ msg: "Something went wrong", error });
  }
};

module.exports = { addCategory };
