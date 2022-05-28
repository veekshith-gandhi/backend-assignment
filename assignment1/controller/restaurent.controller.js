/** @format */

const Restaurant = require("../models/restaurant.model");

const addRestaurent = async (req, res) => {
  try {
    const name = await Restaurant.create({
      restaurantName: req.body.restaurantName,
    });
    if (name) return res.status(201).send({ msg: "created" });
    return res.status(401).send({ msg: "Not created" });
  } catch (error) {
    return res.status(401).send({ msg: "Something went wrong", error });
  }
};

module.exports = { addRestaurent };
