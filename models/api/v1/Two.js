const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for assortiment
const TwoassortmentSchema = new Schema({
    item: {
        art_name: {
            type: String,
            required: false
        },
        //save picture
        art_picture: {
            type: String,
            required: false
        },
        price: {
            type: Number,
            required: false
        },
        //NIEUW VELD
        waarborg: {
            type: Number,
            required: false
        },
        available_from: {
            type: String,
            required: false
        },
        available_until: {
            type: String,
            required: false
        },
        art_desc: {
            type: String,
            required: false
        },
        art_category: {
            type: String,
            required: false
        },
        condition: {
            type: String,
            required: false
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
            required: false
        },
        free: {
            type: Boolean,
            required: false
        },
        premium: {
            type: Boolean,
            required: false
        }
    },
    user: {

        //posted by is the user id from the user collection
        //user id is the same as the user id in the user collection
        user_id: {
            type: Schema.Types.ObjectId,
            required: true
        },

        posted_by: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
    }
});

const Two = mongoose.model('Two', TwoassortmentSchema);

module.exports = {
    Two,
};
