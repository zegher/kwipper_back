const mongoose = require('mongoose');
const { type } = require('os');
const Schema = mongoose.Schema;

// schema for shoppingCart
const WishlistItem = new Schema({
    // amount: {
    //     type: Number,
    //     required: true
    // },
    product_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    added_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = { WishlistItem };