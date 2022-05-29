/** @format */

const express = require("express");
const connect = require("./config/db");

const app = express();
const PORT = 8080;

const bookRouter = require("./routes/book.routes");
app.use(express.json());

app.use("/api/book", bookRouter);

const start = async () => {
  await connect();
  app.listen(PORT, () => {
    console.log(`listening to PORT : ${PORT}`);
  });
};

module.exports = start;
