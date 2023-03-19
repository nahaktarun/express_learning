const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const winston = require("winston");
const app = express();
const dotenv = require("dotenv");
const routes = require("./routes");

dotenv.config();
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

// checking for errors
database.on("error", (err) => {
  console.log(err);
});
database.once("connected", () => {
  console.log("Database connected");
});

app.use(morgan("default"));
app.use(express.json());

app.listen(3000, () => {
  console.log(`Server started at ${3000}`);
});

// consuming the routes
app.use("/api/v1", routes);

// mongoose.connect(
//
//   );
