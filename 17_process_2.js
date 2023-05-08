// process.kill() -> using this method we'll be killing a process.

// events:
// 1. sigTerm
// 2. SigInt
// 3. sighup

const information = () => {
  console.log("receive the SIGINT signal from nodejs");
};

process.on("SIGINT", information);
setTimeout(() => {
  console.log("exit the process");
  process.exit(0);
}, 100);

process.kill(process.pid, "SIGINT");

// What are the various ways to secure http server :
// 1. encryption SSL certificate , public key and private key

// aws, gcp, azure...

// 2. token authentications
// session/cookies/localstorage

// authication systems auth0, jwt.
