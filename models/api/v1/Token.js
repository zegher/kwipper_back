const mongoose = require('mongoose');
// const { type } = require('os');
const Schema = mongoose.Schema;

// schema for user
const TokenSchema = new Schema({
   token: {
         type: String,
         required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
const Token = mongoose.model('Token', TokenSchema);


module.exports = {
    Token,
};
