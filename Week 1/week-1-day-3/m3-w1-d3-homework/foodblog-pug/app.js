var express = require('express');
var path = require('path');
var app = express();

// Set the views directory and use Pug as the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serve static files (css, js, images)
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', function(req, res) {
  res.render('food_blog');
});

// Start the server
var hostname = 'localhost';
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Server is running on http://${hostname}:${port}`);
});
