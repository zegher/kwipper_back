const mongoose = require('mongoose');
const { type } = require('os');
const Schema = mongoose.Schema;

// schema for shoppingCart
const PictureItem = new Schema({
    added_at: {
        type: Date,
        default: Date.now
    },
    pic_name: {
        type: String,
        required: true,
    }
});

module.exports = { PictureItem };