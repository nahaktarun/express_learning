// What is process?
// each process is isoloted from each other

// process1
//  process2 : running instance of a computer program
// process module
// process events:

// 1. exit
// 2. beforeExit
// 3. uncaughtException
// 4. Signal events => signin

// monolith and microservice:

// process.on("exit", (statuscode) => {
//   setTimeout(() => {
//     console.log("code exited");
//   }, 0);
//   console.log("Code exit with code ", statuscode);
// });
// console.log("Program");

// using process write on tothe console
// process.stdout.write("Hello world" + "\n");

// getting console inputs
// process.argv.forEach((value, index, array) => {
//   console.log(index, value, array);
// });

// console.log(process.memoryUsage());

// console.log(process.version);
// console.log(process.argv);
const values = process.argv;

if (values[2] == "argument1") {
  console.log("This is a argument that you've inserted");
}

const http = require("http");
