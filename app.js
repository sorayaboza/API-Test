// This file makes handling requests easier.

const express = require('express')
const app = express()
const morgan = require('morgan') // morgan tells us in terminal everything we request.

const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')

app.use(morgan('dev'))

/* 
Middleware. Any incoming request must come through app.use
and whatever we pass to it (like req, res, and next).
Sets up /products for use in products.js.
*/
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            mesage: error.message
        }
    })
})

module.exports = app