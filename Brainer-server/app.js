const express = require('express')
const cors = require('cors')
const feedbackRoute = require('./routes/feedbackRoute')
const quizRoute = require('./routes/quizRoute')

const app = express();

app.use(cors())

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use('/feedback', feedbackRoute)
app.use('/quiz', quizRoute)

module.exports = app;