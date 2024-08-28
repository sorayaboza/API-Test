const express = require('express')
const router = express.Router()

// localhost:3000/products

// This calls /products, which is set in app.js.
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    })
})

// Handle POST requests to /products
router.post('/', (req, res, next) => {
    const product = {
        // Uses bodyParser
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: 'Handling POST requests to /products',
        createdProduct: product

    })
})

// Handle GET requests for a specific product by ID
router.get('/:productID', (req, res, next) => {
    const id = req.params.productID
    // localhost:3000/products/special
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID!',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})

// Handle PATCH requests to update a specific product by ID
router.patch('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product!'
    })
})

// Handle DELETE requests to remove a specific product by ID
router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    })
})

module.exports = router