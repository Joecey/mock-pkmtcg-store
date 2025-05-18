// Handle GET, POST, PUT, DELETE requests that are pointed towards index

const express = require('express')
const router = express.Router()

const connection = require('../packages/connection')

router.get('/', (req, res) => {
    // render our view
    connection.query('SELECT * FROM products ORDER BY RAND() LIMIT 3 ', (err, rows, _fields) => {
        if (err) {
            console.error('Error retrieving data from database: ', err)
            res.status(500).render('500', { title: 'Server Error' })
        } else {
            console.log('Retrieving three random items from db...')
            res.render('index', { title: 'HomeBrewedTCG', featuredProducts: rows })
        }
    })
})

// export our index.js route to app.js
module.exports = router
