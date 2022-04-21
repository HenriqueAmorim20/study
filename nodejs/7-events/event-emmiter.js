const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// First listen for the event
customEmitter.on("response", () => {
  console.log("event emitted");
});

// Possible to use arguments as any other function
customEmitter.on("response", (name, id) => {
  console.log(`data received, user ${name} with id: ${id}`);
});

// Then emit the event
customEmitter.emit("response", "Henrique", 2);
