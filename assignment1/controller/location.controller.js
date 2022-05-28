/** @format */

const Locations = require("../models/location.model");

const addLocation = async (req, res) => {
  try {
    const name = await Locations.create({
      restaurantId: req.body.restaurantId,
      location: req.body.location,
    });
    if (name) return res.status(201).send({ msg: "created" });
    return res.status(401).send({ msg: "Not created" });
  } catch (error) {
    return res.status(401).send({ msg: "Something went wrong", error });
  }
};

module.exports = { addLocation };
