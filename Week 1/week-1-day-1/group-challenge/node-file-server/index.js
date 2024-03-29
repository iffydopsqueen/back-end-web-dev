// Import the 'http' module to create an HTTP server.
var http = require('http');

// Import the 'fs' module to work with the file system.
var fs = require('fs');

// Import the 'path' module to manipulate file paths.
var path = require('path');

// Define the hostname & port on which the server will listen.
var hostname = 'localhost';
var port = 5000; // You can use any port you prefer

// Create an HTTP server and define a callback function that handles requests and responses.
var server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} by method ${req.method}`);

    if (req.method === 'GET') {
        var fileUrl = req.url;

        if (fileUrl === '/') {
            fileUrl = '/index.html';
        }

        var filePath = path.resolve('./' + fileUrl);
        var fileExt = path.extname(filePath);

        if (fileExt === '.html') {
            // Check if the requested URL is for an HTML page.
            fs.access(filePath, function (err) {
                if (err) {
                    // If there is an error reading the file, respond with a 500 Internal Server Error.
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(`<html><body><h1>Internal Server Error</h1></body></html>`);
                    return;
                }

                // If the file is read successfully, respond with a 200 OK status and serve the HTML content.
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');

                fs.createReadStream(filePath).pipe(res);
            });
        } else {
            // If the requested URL is not for an HTML page, respond with a 404 Not Found status.
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<html><body><h1>Not Found</h1></body></html>`);
        }
    } else {
        // If the request method is not GET, respond with a 404 Not Found status.
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body><h1>Error 404: ${req.method} not supported</h1></body></html>`);
    }
});

// Start the server and listen on the specified port and hostname.
server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}/`);
});
