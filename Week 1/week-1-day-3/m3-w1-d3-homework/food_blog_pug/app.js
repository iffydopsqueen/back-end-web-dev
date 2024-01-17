// Imports the Express framework
// This allows you to create an HTTP server and define routes.
var express = require("express");

// Imports the "path" module
// This provides utilities for working with file and directory paths.
var path = require("path");

// Imports the "router" from the "server.js" file located in the "routes" directory
var serverRouter = require("./routes/server");

// Creates an instance of the Express application, which is used to configure and run the server
var app = express();

// Serve static files (css, js, images) from the "public" directory
// This line sets up a middleware to handle requests for static files and 
// maps them to the /public URL path.
app.use('/public', express.static(path.join(__dirname, 'public')));

// Set the views directory and use Pug as the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Mounts the "serverRouter" middleware at the "/components" path
// This means that any requests to "/components" will be handled by the "routes" defined in "serverRouter".
app.use("/components", serverRouter);

// Defines a route for the root path ("/") that renders the Pug template named "food_blog"
app.get("/", function (req, res) {
  res.render("food_blog");
});

// Start the server
var hostname = "localhost";
var port = 3000;

app.listen(port, function () {
  console.log(`Server is running on http://${hostname}:${port}`);
});