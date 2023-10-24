// Import the 'http' module to create an HTTP server.
var http = require('http');

// Import the 'fs' module to work with the file system.
var fs = require('fs');

// Import the 'path' module to manipulate file paths.
var path = require('path');

// Define the port on which the server will listen.
var port = 5000; // You can use any port you prefer

// Create an HTTP server and define a callback function that handles requests and responses.
var server = http.createServer((req, res) => {
  if (req.url === '/') {  // Check if the requested URL is the root URL ('/').
    
    // Construct the absolute file path to the 'index.html' file in the current directory.
    var htmlFilePath = path.join(__dirname, 'index.html');

    // Read the contents of the 'index.html' file using UTF-8 encoding.
    fs.readFile(htmlFilePath, 'utf8', (err, data) => {

      // If there is an error reading the file, respond with a 500 Internal Server Error.
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body><h1>Internal Server Error</h1></body></html>`);
        return;
      }

      // If the file is read successfully, respond with a 200 OK status and serve the HTML content.
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    });
  } else {
    // If the requested URL is not the root URL, respond with a 404 Not Found status.
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<html><body><h1>Not Found</h1></body></html>`);
  }
});

// Start the server and listen on the specified port.
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
