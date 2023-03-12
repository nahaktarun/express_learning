// mongoose -> library using we can mongodb
var mongoose = require("mongoose");
var express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://tarun:tarun25@cluster0.v4byy.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// console.log("Connection successful");
mongoose.connect(
  "mongodb+srv://tarun:tarun25@cluster0.v4byy.mongodb.net/mydb?retryWrites=true&w=majority"
);

// design or structure of database
var personSchema = mongoose.Schema({
  name: String,
  age: Number,
  nationality: String,
});

// use schema in the form of model
var Person = mongoose.model("Person", personSchema);

app.set("view engine", "pug");

app.set("views", "./views");
app.get("/person", (req, res) => {
  res.render("person");
});
app.post("/person", (req, res) => {
  var personInfo = req.body;

  if (!personInfo.name || !personInfo.age || !personInfo.nationality) {
    res.render("show_message", {
      message: "Sorry you provided wrong information",
      type: "error",
    });
  } else {
    var newPerson = new Person({
      name: personInfo.name,
      age: personInfo.age,
      nationality: personInfo.nationality,
    });
    console.log(personInfo);
    newPerson
      .save()
      .then(() =>
        res.render("show_message", {
          message: "New person added",
          type: "success",
          person: personInfo,
        })
      )
      .catch((err) => {
        res.render("show_message", {
          message: "Database error",
          type: "error",
        });
      });
  }
});

app.listen(3000, console.log("server is running on PORT 3000...."));
