const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const shemaShema = new Schema({
    color: {
        type: String,
        required: true
    }, director: {
        type: String,
        required: true
    }, reviews: {
        type: Number,
        required: true
    }, duration: {
        type: Number,
        required: true
    }},{
        timestamps: true
    });

var Shema = mongoose.model('Shema', shemaShema);

module.exports = Shema;