var express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());
const mov = require('../shared /movies');
const Movie = require('../models/movie');

router.all('/', (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});

router.get('/', (req, res, next) => {
  Movie.find({director_name: 'Predrag Licina'}).then((movie) => {
    console.log(movie)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(movie);
}, (err) => next(err))
.catch((err) => next(err));
})

router.post('/', (req, res, next) => {
  Movie.create(req.body)
    .then((movie) => {
        console.log('movie Created ', movie);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(movie);
    }, (err) => next(err))
    .catch((err) => next(err));
});

router.put('/', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /');
});

router.delete('/', (req, res, next) => {
  Movies.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err))
});

router.get('/:movieTitle', (req, res, next) => {
  Movie.find({movie_title: req.params.movieTitle}).then((movie) => {
    console.log(movie)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(movie);
}, (err) => next(err))
.catch((err) => next(err));
});

router.post('/:movieTitle', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on //' + mov.MOVIES[req.params.movieTitle]);
});

router.put('/:movieId', (req, res, next) => {
  Movie.findByIdAndUpdate(req.params.movieId, {
    $set: req.body
}, { new: true })
.then((movie) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(movie);
}, (err) => next(err))
.catch((err) => next(err));
});

router.delete('/:movieId', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.movieId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = router;
