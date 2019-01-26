const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, unique: true},
    name: { type: String },
    provider_id: { type: String, },
    provider_pic: { type: String, },
    token: { type: String, },
    fitness: [{
        weight: { type: Number },
        date: { type: String }
    }]
});

UserSchema.plugin(findOrCreate);

const User = mongoose.model('User', UserSchema);

module.exports = User;