const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for assortiment
const AssortmentSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    posted_by: {
        type: String,
        required: true
    },
    art_name: {
        type: String,
        required: true
    },
    art_desc: {
        type: String,
        required: true
    },
    art_category: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: false
    },
    brand: {
        type: String,
        required: false
    },
    complete_set: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    available_from: {
        type: String,
        required: true
    },
    available_until: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    free: {
        type: Boolean,
        required: true
    },
    premium: {
        type: Boolean,
        required: true
    },
});

const Assortment = mongoose.model('Assortment', AssortmentSchema);

module.exports = {
    Assortment,
};
