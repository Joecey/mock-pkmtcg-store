// Handle GET, POST, PUT, DELETE requests that are pointed towards index

const express = require('express')
const router = express.Router()

const connection = require('../packages/connection')

router.get('/', (_req, res) => {
    // get all products from the database and render accordingly
    connection.query('SELECT * FROM products ORDER BY RAND() ', (err, rows, _fields) => {
        if (err) {
            console.error('Error retrieving data from database: ', err)
            res.status(500).render('500', { title: 'Server Error' })
        } else {
            console.log('Retrieving all products from database...')
            res.render('products', { title: 'Products', products: rows })
        }
    })
})

router.get('/pokemon/:type', (req, res) => {
    const type = req.params.type

    connection.query(
        'SELECT * FROM products WHERE type = ? ORDER BY RAND() ',
        [type],
        (err, rows, _fields) => {
            if (err) {
                console.error('Error retrieving data from database: ', err)
                res.status(500).render('500', { title: 'Server Error' })
            } else {
                console.log(`Retrieving all ${type} products from database...`)
                res.render('products', { title: 'Products', products: rows })
            }
        }
    )
})

// export our index.js route to app.js
module.exports = router
