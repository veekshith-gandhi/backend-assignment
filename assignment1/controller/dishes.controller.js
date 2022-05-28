/** @format */

const Dishe = require("../models/dishes.model");

const addDishe = async (req, res) => {
  try {
    const name = await Dishe.create({
      restaurantId: req.body.restaurantId,
      locationId: req.body.locationId,
      categoryId: req.body.categoryId,
      dish: req.body.dish,
    });
    if (name) return res.status(201).send({ msg: "created" });
    return res.status(401).send({ msg: "Not created" });
  } catch (error) {
    return res.status(401).send({ msg: "Something went wrong", error });
  }
};

//based on location and restaurent
const getDishes = async (req, res) => {
  let restaurent;
  let location;
  if (req.body) {
    restaurent = req.body.restaurantId;
    location = req.body.locationId;
  }
  try {
    const result = await Dishe.find(
      { $and: [{ restaurantId: restaurent }, { locationId: location }] },
      { dish: 1 }
    );
    console.log(result);
    if (result) {
      return res.status(201).send({ msg: "created", result });
    } else {
      return res.status(401).send({ msg: "Not created" });
    }
  } catch (error) {
    return res.status(401).send({ msg: "Something went wrong", error });
  }
};

module.exports = { addDishe, getDishes };
