const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for user
const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    what_jeugdbeweging: {
        type: String,
        required: false
    },
    jb_name: {
        type: String,
        required: false
    },
    group_number: {
        type: String,
        required: false
    },
    verenigiging_name: {
        type: String,
        required: false
    },
    has_ondnr: {
        type: Boolean,
        required: false
    },
    ondnr: {
        type: String,
        required: false
    },
    straatnaam: {
        type: String,
        required: true
    },
    huisnummer: {
        type: Number,
        required: true
    },
    postcode: {
        type: Number,
        required: true
    },
    gemeente: {
        type: String,
        required: true
    }
});
const User = mongoose.model('User', UserSchema);


module.exports = {
    User,
};
