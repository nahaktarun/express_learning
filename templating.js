var express = require("express");

var app = express();

app.set("view engine", "pug");

app.set("views", "./views");

// app.get("/hello", (req, res) => {
//   res.render("first_view");
// });

app.get("/", (req, res) => {
  res.render("content", {
    name: "Alex",
    url: "https://www.google.com",
  });
});

app.listen(3000);

// function name(value) {
//   // base case
//   if (value === 0) {
//     return 0;
//   }
//   // recursive
//   console.log(value);
//   name(value - 1);
// }

// name(10);
