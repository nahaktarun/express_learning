var express = require("express");
var app = express();

var bodyParser = require("body-parser");

// time logger
// app.use("/things", (req, res, next) => {
//   console.log("A new request received at" + Date.now());
//   next();
// });

// app.get("/things", (req, res) => {
//   console.log("this is from the route");
//   res.send("Things");
// });

// order of middleware calls
// app.use((req, res, next) => {
//   console.log("Start of middleware");
//   next();
// });

// app.get("/", (req, res, next) => {
//   res.send("Hi from the get request");
//   next();
// });

// app.use("/", (req, res, next) => {
//   console.log("End of the middle ware");
// });

// app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.listen(3000);
