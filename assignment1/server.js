/** @format */

const express = require("express");
const connect = require("./config/db");
const app = express();
const PORT = 8080;

const restaurentRouter = require("./routes/restaurentRouter.routes");
const locationRouter = require("./routes/location.routes");
const categoryRouter = require("./routes/category.routes");
const disheRouter = require("./routes/dishes.routes");
const cartRouter = require("./routes/cart.routes");

app.use(express.json());

app.use("/api/restaurent", restaurentRouter);
app.use("/api/location", locationRouter);
app.use("/api/category", categoryRouter);
app.use("/api/dishe", disheRouter);
app.use("/api/cart", cartRouter);

app.use("/", (req, res) => {
  return res.send("Hello API");
});

const start = async () => {
  await connect();
  app.listen(PORT, () => {
    console.log(`listeng on PORT:${PORT}`);
  });
};
module.exports = start;
