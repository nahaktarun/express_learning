var http = require("http");

http
  .createServer((req, res) => {
    // HTTP header
    // http status : 200 / 400
    // content-Type: text/plain

    res.writeHead(200, { "Content-Type": "text/html" });

    res.end("<h1> Hi there</h1>");
  })
  .listen(2000);

console.log("Server is running on PORT 2000...");

// Node.js REPL terminal

// CLI ->
// REPL -> Read Eval Print Loop
