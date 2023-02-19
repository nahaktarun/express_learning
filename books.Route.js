var express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
  res.send("From the books home page");
});
router.get("/books", (req, res) => {
  res.send("get all the books");
});
router.get("/books/:id([0-9]{5})", (req, res) => {
  res.send("get one  book");
});

router.get("*", (req, res) => {
  res.send("Sorry invalid route path");
});

module.exports = router;
