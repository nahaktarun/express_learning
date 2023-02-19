var express = require("express");

var app = express();

app.set("view engine", "pug");

app.set("views", "./views");

app.get("/hello", (req, res) => {
  res.render("first_view");
});

app.get("/dynamic_view", (req, res) => {
  res.render("dynamic", {
    name: "Alex",
    url: "https://www.google.com",
  });
});

app.listen(3000);
