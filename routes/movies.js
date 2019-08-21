var express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
const Q = require('../shared /movies');

/* router.get('/',(req,res,next) => {
    Movies.find({})
    .then((movies) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(movies);
    }, (err) => next(err))
    .catch((err) => next(err));
}) */



router.all('/', (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  });
  
  router.get('/', (req,res,next) => {
      res.end('Will send all the  to you!');
      console.log(MOVIES)

  });
  
  router.post('/', (req, res, next) => {
   res.end('Will add the dish: ' + req.body.title + ' with details: ' + req.body.rank + ' id : ' + req.body.id);
  });
  
  router.put('/', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /');
  });
   
  router.delete('/', (req, res, next) => {
      res.end('Deleting all ');
  });
  
  router.get('/:movieId', (req,res,next) => {
      res.end('Will send details of the dish: ' + q.MOVIES[req.params.movieId] +' to you!');
  });
  
  router.post('/:movieId', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on //'+ MOVIES[req.params.movieId]);
  });
  
  router.put('/:movieId', (req, res, next) => {
    res.write('Updating the dish: ' + MOVIES[req.params.movieId].title + '\n');
    res.end('Will update the dish: ' + MOVIES[req.params.movieId].title + 
          ' with details: ' + MOVIES[req.params.movieId].rank);
  });
  
  router.delete('/:movieId', (req, res, next) => {
      res.end('Deleting dish: ' + MOVIES.MOVIES[req.params.movieId].title);
  });

module.exports = router;
