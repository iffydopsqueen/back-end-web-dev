// Require the 'express' module to create an Express application
var express = require('express');
// Create an Express application
var app = express();

// Require the 'path' module to work with file paths
var path = require('path');

// Define the port number & hostname on which the app will listen for incoming requests
var port = 3000;
var hostname = 'localhost';

// Serve static files (like the "index.html" file) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the Express app and listen on the specified port
app.listen(port, hostname, function() {
    console.log(`App is running on http://${hostname}:${port}`);
});