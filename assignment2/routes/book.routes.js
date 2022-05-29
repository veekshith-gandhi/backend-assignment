/** @format */

const { addBook, getByCategory } = require("../controller/book.controller");

const router = require("express").Router();

router.post("/", addBook);
router.get("/", getByCategory);

module.exports = router;
