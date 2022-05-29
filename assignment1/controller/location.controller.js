/** @format */

const Locations = require("../models/location.model");

const addLocation = async (req, res) => {
  try {
    const result = await Locations.create({
      locationName: req.body.locationName,
      restaurant: req.body.restaurant,
    });
    if (result) return res.status(201).send({ msg: result });
    return res.status(401).send({ msg: "something went wrong" });
  } catch (error) {
    return res.status(501).send({ msg: "something went wrong" });
  }
};

module.exports = addLocation;
