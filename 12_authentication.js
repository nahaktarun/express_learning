var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var session = require("express-session");
var cookies = require("cookie-parser");

var app = express();
var multer = multer();

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer.array());
app.use(cookies());
app.use(
  session({ secret: "This is fine", resave: true, saveUninitialized: true })
);

var users = [];

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", (req, res) => {
  if (!req.body.name || !req.body.password) {
    res.status(400);
    res.send("Incorrect info provided");
  } else {
    users.filter((user) => {
      if (user.name === req.body.name) {
        res.render("signup", {
          message: "User already exist",
        });
      }
    });
    var newUser = { name: req.body.name, password: req.body.password };
    users.push(newUser);
    req.session.user = newUser;
    res.redirect("/login");
  }
});

function checkSignin(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    var err = new Error("User not logged in");
    console.log(req.session.user);
    next(err);
  }
}

app.get("/allowed_page", checkSignin, (req, res) => {
  res.render("allowed_page", { name: req.session.user.name });
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login", (req, res) => {
  console.log(users);
  if (!req.body.name || !req.body.password) {
    res.render("login", { message: "please enter both id and password" });
  } else {
    users.filter((user) => {
      if (user.name === req.body.name && user.password === req.body.password) {
        req.session.user = user;
        req.redirect("/allowed_page");
      }
    });
    res.render("login", { message: "invalid credentials" });
  }
});

app.listen(4000);
