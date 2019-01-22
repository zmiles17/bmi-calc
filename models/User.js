const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, unique: true },
    name: { type: String },
    provider_id: { type: String, unique: true },
    provider_pic: { type: String, unique: true },
    token: { type: String, unique: true }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;