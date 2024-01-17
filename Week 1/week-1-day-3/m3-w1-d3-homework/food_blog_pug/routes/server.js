var express = require('express');

// Creates an instance of an Express router
// "Routers" are used to define groups of routes that can be applied to your application
var router = express.Router();

// Defines a route for handling GET requests to the '/components' path
// When a request is made to '/components', the router will render the "food_blog" Pug template
router.get('/components', function(req, res){
    res.render('food_blog');
});

// Exports the router so that it can be used in other files
// In this case, it is exported to be used in the "app.js" file.
module.exports = router;
