import http from 'http';
const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log("hello world");
    //res.end("hello world");
    if (req.url === "/") {
        res.end("hello from home page");
    } else if (req.url === "/about") {
        res.end("about page");
    } else if (req.url === "/contact") {
        res.end("contact page");
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("server is running on port 3000");
}); 
    
    