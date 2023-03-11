var fs = require("fs");
var data = "THis is the data i want to loaded into the fs stream write file";

var writeableStream = fs.createWriteStream("write_data.txt");

// write the data in which we;re encoding the charset UTF-8
writeableStream.write(data, "utf-8");

// end event is triggered when you've finished the writing
writeableStream.end();

// finish event triggered to flush the data is written or resources

writeableStream.on("finish", () => {
  console.log("Written to file completed");
});

writeableStream.on("error", (err) => {
  console.log(err.stack);
});

console.log("done with the program");
