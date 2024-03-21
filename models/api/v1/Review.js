const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for review
const ReviewSchema = new Schema({
    posted_by: {
        type: String,
        required: true
    },
    user_reviewed: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Review = mongoose.model('Review', ReviewSchema);
module.exports = { Review, };