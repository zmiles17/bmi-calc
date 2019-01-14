const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String },
    name: { type: String },
    provider: { type: String },
    provider_id: { type: String },
    provider_pic: { type: String },
    token: { type: String }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;