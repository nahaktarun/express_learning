var express = require("express");
var bookRoutes = require("./books.Route");
var app = express();
const PORT = 7020;
app.get("/", (req, res) => {
  res.send("Hello from the server....");
});
// app.get("/books", (req, res) => {
//   res.send("There are more books");
// });

app.use("/api", bookRoutes);

// app.use('/products',product)

// MVC  routes

app.listen(PORT, console.log(`Server is running on port ${PORT}`));

// http://localhost:7020/

// HTTP method:
// CRUD
// 1. get -> Read
// 2. PUT -> UPdate
// 3. POST -> create
// 4. DELETE -> delete
