// Import the required 'http' module to create an HTTP server
var http = require('http');

// Import the required modules: "fs" for file operations
var fs = require('fs');
var path = require('path');

// Listen on port 5000
var port = 5000;

// Create an HTTP server using the HTTP module, 
// which takes a callback function with request and response parameters

var server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} by method ${req.method}`);

    // Get the URL from the request
    var url = req.url;

    // Set the content type to HTML for all responses.
    res.setHeader('Content-Type', 'text/html');

    // Check the URL and serve the appropriate HTML file
    var filename;
    if (url === '/home') {
        filename = 'home.html';
    } else if (url === '/about') {
        filename = 'about.html';
    } else if (url === '/contact') {
        filename = 'contact.html';
    }

    // If a valid URL was found, read the corresponding HTML file and send it as the response
    if (filename) {
        fs.readFile(path.join(__dirname, filename), (err, data) => {
            if (err) {
                res.statusCode = 500;    
                res.end(`<html><body><h1>500 Error: Internal Server Error</h1><p>Error loading the file</p></body></html>`);
                //res.end('Error loading the file');
            } else {
                res.statusCode = 200;  
                res.end(data);
            }
        });
    } else {
        // If none of the above URLs match, respond with a "Not Found" message
        res.statusCode = 404;   
        res.end(`<html><body><h1>404 Error: Not found</h1><p>"...${url}" not found</p></body></html>`);
        //res.end('Not Found');
    }
});

// Listen on port 5000 and provide a callback function once the server starts
server.listen(port, () => {
    console.log(`The NodeJS server on port ${port} is now running...`);
})