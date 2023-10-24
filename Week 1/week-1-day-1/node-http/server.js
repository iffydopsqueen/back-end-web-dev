var http = require('http');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;  // 200 code makes sure everything is ok
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello World!</h1></body></html>');  // simple HTML string
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});