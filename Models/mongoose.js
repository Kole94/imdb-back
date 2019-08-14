const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieShema = new Schema({
    name: {
        type: String,
        required: true
    }, description: {
        type: String,
        required: true
    }},
    {
        timestamps: true
});

var Movies = mongoose.model('Movie', movieShema);

module.exports = Movies;