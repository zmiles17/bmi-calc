const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FitSchema = new Schema({
    bmi: {
        type: Number,
        required: [true, 'Need to give valid inputs']
    },
    _user: {type: Schema.Types.ObjectId, ref: 'User'}
});

const Fitness = mongoose.model('Fitness', FitSchema);

module.exports = Fitness;