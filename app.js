const express = require('express')
const app = express()
const morgan = require('morgan') // Logs requests
const bodyParser = require('body-parser')

const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')

app.use(morgan('dev')) // Use request logging

// Extracts and makes json data easily readable
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// CORS handling
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'),
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE')
        return res.status(200).json({})
    }
    next()
})

// Route handling
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

// Handle 404 errors
app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

// Handle all other errors
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app // Export app
