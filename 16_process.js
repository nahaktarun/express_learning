// child process:

// 1. spawn() -> to create the child process / give birth to the child process.
// 2. fork() -> It's uses the information from the parent process and process it for the child process.
// 3. exec() -> running of child process.
// 4. execFile() ->

// Spawn a child process

// const { spawn } = require("child_process");
// // spawn(cammand, argv[],option ) -> return a object with result
// const child = spawn("ls", ["/Users/tarunnahak/express_learning"], {
//   shell: true,
// });
// child.stdout.on("data", (data) => {
//   console.log(`stdout: ${data}`);
// });
// child.stderr.on("data", (data) => {
//   console.log(`stderr: ${data}`);
// });
// child.on("close", (code) => {
//   console.log(`child process terminated with code ${code}`);
// });

// 2. Fork() -> (modulepath, arg[], options)

// const cp = require("child_process");
// let child = cp.fork(__dirname + "/newfile.js");

// child.on("message", function (message) {
//   console.log("parent received the child process", message);
// });

// child.send({ hello: "from the parent process" });

// child.on("close", (code) => {
//   console.log(`Process ended with exist code ${code}`);
// });

// 3. exec() => (command, option[], callback)

const { exec } = require("child_process");

exec("ls |  find ./express", (err, stdout, stderr) => {
  if (err) {
    console.log("Error occured", err);
  }
  console.log(`stdout: no of files = ${stdout}`);
});
