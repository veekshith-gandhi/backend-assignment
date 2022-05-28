/** @format */

const express = require("express");
const app = express();
const PORT = 8080;

const start = () => {
  app.listen(PORT, () => {
    console.log(`listeng on PORT:${PORT}`);
  });
};
module.exports = start;
