//import http from 'http';
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  console.log("hello world");
});
res.writeHead(200, {
  "Content-Type": "application/json",
  "custom-header": "hello-ECE"
});

fs.readFile("config.json", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
if(req.url === "/") {
  res.end("hello from home page");
} else if(req.url === "/about") {
    res.end("about page");
} else if(req.url === "/contact") {
    res.end("contact page");
}
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});