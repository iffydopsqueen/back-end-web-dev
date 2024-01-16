var express = require("express");
var path = require("path");
var serverRouter = require("./routes/server");
var app = express();

// Serve static files (css, js, images)
app.use('/public', express.static(path.join(__dirname, 'public')));

// Set the views directory and use Pug as the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/components", serverRouter);

// Define routes
app.get("/", function (req, res) {
  res.render("food_blog");
});

// Start the server
var hostname = "localhost";
var port = 3000;

app.listen(port, function () {
  console.log(`Server is running on http://${hostname}:${port}`);
});