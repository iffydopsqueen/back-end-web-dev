// Import the required 'http' module to create an HTTP server
var http = require('http');

// Listen on port 5000
var port = 5000;

// Create an HTTP server using the HTTP module, 
// which takes a callback function with request and response parameters

var server = http.createServer((req, res) => {

    // Get the URL from the request object
    var url = req.url;

    // Set the content type to HTML for all responses
    res.setHeader('Content-Type', 'text/html');

    // Check the URL and respond accordingly
    if (url === '/') {

        // If the URL is '/', serve the "index.html" file
        res.statusCode = 200;  // 200 code makes sure everything is ok
        res.end(`<html><body><h1>Welcome to the Home page</h1></body></html>`);
    } else if (url === '/about.html') {

        // If the URL is '/about.html', serve the "about.html" file.
        res.statusCode = 200;  // 200 code makes sure everything is ok
        res.end(`<html><body><h1>Welcome to the About page</h1></body></html>`);
    } else if (url === '/contact.html') {

        // If the URL is '/contact.html', serve the "contact.html" file.
        res.statusCode = 200;   // 200 code makes sure everything is ok
        res.end(`<html><body><h1>Contact Us</h1></body></html>`);
    } else {

        // If none of the above URL matches, respond with "Invalid Request!".
        res.statusCode = 404; // Not Found
        res.end(`<html><body><h1 style="color: red">Invalid Request!</h1></body></html>`);
    }
});

// Listen on the specified port => 5000 and 
// provide a callback function once the server starts
server.listen(port, () => {
    console.log(`The NodeJS server on port ${port} is now running...`);
});














