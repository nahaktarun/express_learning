var express = require("express");
var cookieParser = require("cookie-parser");
var session = require("express-session");

var app = express();
app.use(cookieParser());
app.use(
  session({
    secret: "This is my secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.get("/", (req, res) => {
  console.log(req.session.page_views);
  if (req.session.page_views) {
    req.session.page_views++;
    res.send("You visited this page" + req.session.page_views + "times");
  } else {
    req.session.page_views = 1;
    res.send("Welcome to the page for the first time");
  }
});

app.listen(3000);
