/** @format */

const Locations = require("../models/location.model");
const Product = require("../models/product.model");

const listAllDishes = async (req, res) => {
  const { location, restaurant } = req.body;
  try {
    const loc = await Locations.find({
      locationName: location,
    });
    if (!loc)
      return res.status(401).send({ msg: "no restaurant near that location" });

    const result = await Product.find(
      {
        restaurant: restaurant,
      },
      { _id: 0, dish: 1, category: 1, price: 1 }
    );
    if (result) return res.status(201).send(result);
    return res.status(401).send({ msg: "something went wrong" });
  } catch (error) {
    return res.status(501).send({ msg: "something went wrong" });
  }
};

module.exports = listAllDishes;
