const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Welcome");
// });

// Using Event Emitter API
// http module extends the Event Emitter module by default
const server = http.createServer();
// emits request event
// subscribe to it / listen to it / respond to it
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(8000);
