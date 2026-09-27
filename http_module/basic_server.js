import http from 'http';

// create basic http server
const server = http.createServer((_req, res) => {
  console.log("hello world");
  const order = {
    orderId: 10987,
    des: "delhi",
    source: "ghaziabad"
  };
});



 res.writeHead(200, {
     "Content-Type": "application/json",
    "custom-header": "hello-ECE" 
});
  fs.readFile("index.html", (err, data) => {
    if (err) {
        res.writeHead(404);
        res.write("Error: file not found");
    } else {
        res.write(data);
    }
});

server.listen(3000,"127.0.0.1", () => {
    console.log("server is running on port 3000");
});

