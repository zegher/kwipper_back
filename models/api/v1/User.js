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
        required: true
    },
    jb_name: {
        type: String,
        required: true
    },
    group_number: {
        type: String,
        required: true
    },
    verenigiging_name: {
        type: String,
        required: true
    },
    has_ondnr: {
        type: Boolean,
        required: true
    },
    ondnr: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = {
    User,
};
