const http = require("http");

// (incoming request, response to be sent)
const server = http.createServer((req, res) => {

  // Check the request path url and ends the response
  if (req.url === "/") {
    res.end("Welcome to home page");
  } else if (req.url === "/about") {
    res.end("About page");
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>Page not found!</p>
      <a href="/">back home</a>
    `);
  }

  // console.log(req);
  // res.write("Response text");
  // res.end();
});

// start and listem http server in this port
server.listen(8000);
