var events = require("events");

// Event emitter object
var eventEmitter = new events.EventEmitter();

// handler > handles the event when trigger or emitted

var connectionHandler = function connected() {
  console.log("Connection successful");

  // fire the data received from the event handler
  eventEmitter.emit("data_received");
};

// to bind even handler to a even .on()

eventEmitter.on("connection", connectionHandler);

eventEmitter.on("data_received", () => {
  console.log("data received successfully");
});

// fire/ trigger the even
eventEmitter.emit("connection");
console.log("program ended");
