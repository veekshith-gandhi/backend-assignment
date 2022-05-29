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

module.exports = register;
