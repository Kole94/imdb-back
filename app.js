var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* MONGO */

const mongoose = require('mongoose');


 /* var newMovie = Movie({
    movie_title: 'Poslednji Srbin u Hrvatskoj',
    director_name: 'Predrag Licina',
    color: 'color',
    duration: '111',
    actor_1_name: 'Hristina Popovic',
    language: 'srpsko hrvatskit',
    country: 'Croatia',
    title_year: '2018',
  });

  newMovie.save()
      .then((dish) => {
          console.log(dish);
          return Movie.find({});
      })
      
      .then(() => {
          return mongoose.connection.close();
      })
      .catch((err) => {
          console.log(err);
      });

}); */
mongoose.connect('mongodb://localhost:27017/Movies', {useNewUrlParser: true});

var Movie = require('./models/movie')

/* Movie.find({movie_title: 'Titanic'})
.then((doc) => {
  console.log(doc)
})
.catch(err => {
  console.error(err)
}); */

// Routers

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
