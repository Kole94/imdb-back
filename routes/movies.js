var express = require('express');
const bodyParser = require('body-parser');

const Movies = require('../Models/mongoose')


var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'MOVIES'
  });
});

router.get('/:movieId', (req, res, next) => {
  const id = req.params.movieId;
  if(id === 'special'){
    res.status(200).json({
      message: 'yes yes yo',
      id: id
    });
  } else {
    res.status(200).json({
      message: 'nooo'
    })
  }
});

router.post('/', (req, res, next) => {
  const movie = new Movies ({
    name: req.body.name,
    description: req.body.description
  });

  movie
  .save()
  .then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));

  res.status(201).json({
    message: 'yesssss',
    created: movie
  })
 });

/* 
router.get('/:movieId', (req, res, next) => {
  const id = req.params.movieId;
  if(id === 'platoon'){
    res.status(200).json({
      message: 'platoon',
      id: id
    });
  } else {
    res.status(200).json({
      message: 'nooo'
    })
  }
}); 

router.post('/', (req, res, next) => {
  res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
 });  */
 
module.exports = router;