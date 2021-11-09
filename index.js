const http = require('http');

const hostname = "0.0.0.0"
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Hello World i'm working");
});

server.listen(port,hostname, () => {
  console.log(`Server running on port: ${port}`);
});