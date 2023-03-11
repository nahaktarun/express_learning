// Streams: continous flow in which we're to write or read somthing
// live chat : stream source and destination

// data any kind of stream data
// 4 Types of steams
// a. Readable stream : reading data in continous fashion
// b. write stream : writing data in continous fashion
// c. duplex stream: doing writing and reading together
// d. transform - A type of duplex in which output is the input for the other

// g(f(x)) <- in very general

// In streams we've very commonly used event emitter
// a. data -> Event emitter is fired when there is data is available
// b. end -> Event emitter is fired when there is no more data available
// c. error -> whenever encounter a error in stream
// d. finish ->flushed all the data from the server to the client

var fs = require("fs");
var data = "";

// Readable file system stream
var readableStream = fs.createReadStream("hello.txt");

// Set the encoding - utf-8
readableStream.setEncoding("utf-8");

// .on() -> to fire a event
readableStream.on("data", (chunk) => {
  data += chunk;
  console.log(chunk.length);
});

readableStream.on("end", () => {
  console.log(data);
});

readableStream.on("error", (err) => {
  console.log(err.stack);
});

console.log("file read successfully");
