const bodyParser = require("body-parser");
var express = require("express");
const multer = require("multer");

var app = express();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

app.set("view engine", "pug");

app.set("views", "./views");

// TODO:
// app.use("/static", express.static("public"));

// app.use(express.static("image"));

// app.get("/hello", (req, res) => {
//   res.render("first_view");
// });

// app.get("/", (req, res) => {
//   res.render("form", {
//     name: "Alex",
//     url: "https://www.google.com",
//   });
// });

app.get("/", (req, res) => {
  res.render("form");
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(upload.array());
app.use(express.static("public"));

//
app.post("/", upload.single("imageupload"), (req, res) => {
  console.log(req.body);
  res.send("Received your request");
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
