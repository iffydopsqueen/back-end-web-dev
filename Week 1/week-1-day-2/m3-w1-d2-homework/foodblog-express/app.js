var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var port = 3000;

// Set the 'views' directory and use the Pug template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Define a route to render your HTML file
// Assuming you have a route like this in your Express app
app.get('/', function(req, res, next) {
  // Replace 'posts1Data' with the actual data from your server
  var posts1Data = [
    {
      author: "Brianna",
      date: "February 18, 2021 @ 3:30 pm",
      content: "Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!"
    }
  ];

  var posts2Data = [
    {
      author: "LINH",
      date: "February 15, 2021 @ 9:46 am",
      content: "I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good. It’s a winner! I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him. Thank you Lisa!"
    }
  ];

  var posts3Data = [
    {
      author: "CATHERINE LEONARDO",
      date: "February 13, 2021 @ 12:58 pm",
      content: "I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure."
    }
  ];

  var posts4Data = [
    {
      author: "KALI",
      date: "February 13, 2021 @ 11:31 am",
      content: "This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!"
    }
  ];

  // Render the 'index' template and pass the data to it
  res.render('index', {
    title: 'Express',
    posts1: posts1Data,
    posts2: posts2Data,
    posts3: posts3Data,
    posts4: posts4Data
  });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
