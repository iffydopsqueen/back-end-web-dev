// how to invoke Express
var express = require('express');
var app = express();

var port = 3000;

// route
app.get('/', function(req, res) {
    res.send("Hello world!");
});

app.listen(port);