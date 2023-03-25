// Use of cookies:
// 1. session management
// 2. Recommendation system.
// 3. user tracking
// cross site scripting XSS attack it can be easily hacked.
var cookieParser = require("cookie-parser");
var express = require("express");
var app = express();
app.use(cookieParser());
app.get("/", (req, res) => {
  res.cookie("name", "Tarun", { maxAge: 25000 }).send(req.cookies);
  console.log(req.cookies["name"]);
});

app.get("/clear_cookie", (req, res) => {
  res.clearCookie("name");
  res.send("Cookie cleared successfully");
});

app.listen(3000);
