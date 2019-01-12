const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FitSchema = new Schema({
    bmi: {
        type: Number,
    }
});

const Fitness = mongoose.model('Fitness', FitSchema);

module.exports = Fitness;