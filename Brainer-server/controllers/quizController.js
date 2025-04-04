const quiz = require('./../models/quizModel')
const feedback = require("../models/feedback-data-model");

exports.getQuiz = async (req, res) => {
    try {
        const fetchQuiz = await quiz.findOne({code: req.params.code});
        res.status(201).json({
            status: "success",
            quiz: fetchQuiz
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'Failed',
            message: err.message
        })
    }
}

exports.createQuiz = async (req, res) => {
    try {
        const newData = await quiz.create(req.body);

        res.status(201).json({
            status: 'success',
            message: 'quiz successfully created',
            data: newData
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'Failed',
            message: err.message
        })
    }
}