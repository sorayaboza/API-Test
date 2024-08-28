// This file makes handling requests easier.

const express = require('express')
const app = express()

/* 
Middleware. Any incoming request must come through app.use
and whatever we pass to it (like req, res, and next).
*/
app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works!'
    })
})

module.exports = app