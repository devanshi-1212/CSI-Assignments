http = require("node:http");

listener = function (req, res) {
  res.end("Hello World");
};

server = http.createServer(listener);
server.listen(3000);

console.log("Server running");
