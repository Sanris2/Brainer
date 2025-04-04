const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const quizController = require('./../controllers/quizController')
const router = express.Router();


router
    .route('/:code')
    .get(quizController.getQuiz)

router
    .route('/')
    .post(jsonParser, quizController.createQuiz)

module.exports = router;