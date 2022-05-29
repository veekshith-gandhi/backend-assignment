/** @format */

const Product = require("../models/product.model");
const User = require("../models/user.model");
const { use } = require("../routes/user.routes");

const addProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.find({
      "details.id": id,
    });

    if (!user[0]) return res.status(401).send({ msg: "user not found" });
    if (user[0]?.isAdmin) {
      const result = await Product.create({
        restaurant: req.body.restaurant,
        dish: req.body.dish,
        category: req.body.category,
        price: req.body.price,
      });
      if (result) return res.status(201).send({ msg: "created", result });
      return res.status(401).send({ msg: "somthing went wrong" });
    } else {
      return res.status(401).send({ msg: "User Not Admin" });
    }
  } catch (error) {
    return res.status(501).send({ msg: "something went wrong" });
  }
};

module.exports = addProduct;
