const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const movieShema = new Schema({
    color: {
        type: String,
        required: true
    }, director_name: {
        type: String,
        required: true
    }, num_critic_for_reviews: {
        type: Number,
        required: true
    }, duration: {
        type: Number,
        required: true
    }, director_facebook_likes: {
        type: Number,
        required: true
    }, actor_3_facebook_likes: {
        type: Number,
        required: true
    }, actor_2_name: {
        type: String,
        required: true
    }, actor_1_facebook_likes: {
        type: String,
        required: true
    }, gross: {
        type: String,
        required: true
    }, genres: {
        type: String,
        required: true
    }, actor_1_name: {
        type: Number,
        required: true
    }, movie_title: {
        type: String,
        required: true
    }, num_voted_users: {
        type: Number,
        required: true
    }, facenumber_in_poster: {
        type: Number,
        required: true
    }, cast_total_facebook_likes: {
        type: Number,
        required: true
    }, actor_3_name: {
        type: String,
        required: true
    }, facenumber_in_poster: {
        type: Number,
        required: true
    },plot_keywords: {
        type: String,
        required: true
    },movie_imdb_link: {
        type: String,
        required: true
    },num_user_for_reviews: {
        type: Number,
        required: true
    },language: {
        type: String,
        required: true
    },country: {
        type: String,
        required: true
    }, content_rating: {
        type: String,
        required: true
    }, budget: {
        type: Number,
        required: true
    }, title_year: {
        type: Number,
        required: true
    }, actor_2_facebook_likes: {
        type: Number,
        required: true
    }, imdb_score: {
        type: Number,
        required: true
    }, aspect_ratio: {
        type: Number,
        required: true
    }, movie_facebook_likes: {
        type: Number,
        required: true
    }},{
        timestamps: true
    });

var Movies = mongoose.model('Movie', movieShema);

module.exports = Movies;


/* {
    "color": "color",
    "director_name": "Tarantino",
    "num_critic_for_reviews": "3",
    "duration": "123",
    "director_facebook_likes": "23",
    "actor_3_facebook_likes": "2",
    "actor_2_name": "aw",
    "actor_1_facebook_likes": "3122",
    "gross": "das",
    "genres": "sdfsdf",
    "actor_1_name": "321312",
    "movie_titlenum_voted_users": "312",
    "facenumber_in_poster": "3122",
    "cast_total_facebook_likes": "3122",
    "actor_3_name": "3122",
    "facenumber_in_poster": "3122",
    "plot_keywords": "3122",
    "movie_imdb_link": "3122",
    "num_user_for_reviews": "3122",
    "language": "3122",
    "country": "3122": "3122",
    "content_rating": "3122",
    "budget" : "3122",
    "title_year": "3122",
    "actor_2_facebook_likes" : "3122",
    "imdb_score": "3122",
    "aspect_ratio": "3122",
    "movie_facebook_likes": "3122"
    } */