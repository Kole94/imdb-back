var express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const Shema = require('../Models/shema')

const router = express.Router();
router.use(bodyParser.json());

router.get('/',(req,res,next) => {
    res.end('Will send all the dishes to you!');
    /* Shema.find({})
    .then((shema) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(shema);
    }, (err) => next(err))
    .catch((err) => next(err)); */

})