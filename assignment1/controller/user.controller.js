/** @format */

const User = require("../models/user.model");

const register = async (req, res) => {
  const value = Math.random().toString(36).slice(2);
  try {
    const result = await User.create({
      name: req.body.name,
      isAdmin: req.body.isAdmin,
      details: { id: value },
    });
    if (result) return res.status(201).send({ msg: result });
    return res.status(401).send({ msg: "something went wrong" });
  } catch (error) {
    return res.status(501).send({ msg: "something went wrong" });
  }
};

const addToCart = async (req, res) => {
  try {
    const result = await User.updateOne(
      {
        "details.id": req.params.id,
      },
      {
        $set: {
          cart: req.body.cart,
        },
      }
    );
    if (result) return res.status(200).json({ msg: "Cart items Saved" });
  } catch (e) {
    return res.status(500).json({ msg: "Server error" });
  }
};

const checkout = async (req, res) => {
  console.log(req.params);
  try {
    const result = await User.find({
      "details.id": req.params.id,
    });
    // console.log(result[0]);
    if (result) return res.status(200).json({ msg: "order succesfull" });
  } catch (e) {
    return res.status(500).json({ msg: "Server error" });
  }
};

const recivedOrder = async (req, res) => {
  console.log(req.params);
  try {
    const result = await User.find({
      _id: req.params.id,
    });
    console.log(result);
    if (result)
      return res
        .status(200)
        .json({ msg: "order recieved , cooking in progress" });
  } catch (e) {
    return res.status(500).json({ msg: "Server error" });
  }
};
module.exports = { register, addToCart, checkout, recivedOrder };
