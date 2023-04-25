process.on("message", (message) => {
  console.log("child process received the ", message);
});

process.send({ hello: "from the child process" });
