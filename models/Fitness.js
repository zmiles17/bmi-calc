const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FitSchema = new Schema({
    bmi: {
        type: Number,
        required: [true, 'An error occurred while processing your request! Please give valid entries!']
    },
    weight: { type: Number, required: true, min: 0, max: 500 },
    height: { type: Number, required: true, min: 0, max: 300 },
    category: { type: 'String', required: true },
});

const Fitness = mongoose.model('Fitness', FitSchema);

module.exports = Fitness;