/** @format */

const express = require("express");
const connect = require("./config/db");
const app = express();
const PORT = 8080;

const authRouter = require("./routes/user.routes");
const productRouter = require("./routes/product.routes");
const locationRouter = require("./routes/location.routes");

app.use(express.json());

app.use("/api/register", authRouter);
app.use("/api/admin/product", productRouter);
app.use("/api/admin/location", locationRouter);

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
