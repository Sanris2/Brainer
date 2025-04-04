const mongoose = require('mongoose')

const feedbackDataSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    category: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    }
});

const feedback = mongoose.model('feedback', feedbackDataSchema);

module.exports = feedback;