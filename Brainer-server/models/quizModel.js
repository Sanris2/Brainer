const mongoose = require('mongoose')
const Schema = mongoose.Schema

const optionSchema = new Schema({
    value: {
        type: String,
        required: true
    }
})

const questionSchema = new Schema({
    qno: {
        type: Number,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    options: [optionSchema],
    answer: {
        type: String,
        required: true
    }
})

const quizDataSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    questions: [questionSchema]
});

const quiz = mongoose.model('quizquestion', quizDataSchema);

module.exports = quiz;