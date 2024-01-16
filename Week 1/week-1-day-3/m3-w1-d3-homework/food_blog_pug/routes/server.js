var express = require('express');
var router = express.Router();

router.get('/components', function(req, res){
    res.render('food_blog');
});

module.exports = router;
