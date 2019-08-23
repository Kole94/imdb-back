const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieShema = new mongoose.Schema({
    movie_title: String,
    director_name: String,
    color:  String,
    duration:  String,
    actor_1_name: String,
    language: String,
    country: String,
    title_year: String
});

var Movie = mongoose.model('movies', movieShema);

module.exports = Movie;