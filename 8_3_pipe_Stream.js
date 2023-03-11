// pipe -> output of one stream is input of another stream
var fs = require("fs");
var zlib = require("zlib");
// file zipping .rar , tar.gz
// var readableStream = fs.createReadStream("hello.txt");

// var writableSteam = fs.createWriteStream("output.txt");

// readableStream.pipe(writableSteam);

// console.log("executed sucessfully");

// Chaining -> performing multiple pipes together
// .then()
// .then()
// .then()
// .pipe()
// .pipe()

// hello.txt -> createGzip(hello.txt) -> hello.txt.gz ->
fs.createReadStream("hello.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("hello.txt.gz"));

console.log("chaining completed");
