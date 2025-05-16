// Handle GET, POST, PUT, DELETE requests that are pointed towards index
const express = require('express')
const router = express.Router()

const connection = require('../packages/connection')

router.get('/', (req, res) => {
    // render our view
    res.render('pokemon-not-found', { title: 'Pokemon Not Found' })
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    // render our view
    connection.query('SELECT * FROM products WHERE id = ? LIMIT 1', [id], (err, rows, _fields) => {
        if (err) {
            console.error('Error retrieving data from database: ', err)
            res.status(500).render('500', { title: 'Server Error' })
        } else {
            console.log(`Searching pokemon of ID ${id}...`)
            if (rows.length === 0) res.render('pokemon-not-found', { title: 'Pokemon Not Found' })
            else res.render('pokemon-details', { title: rows[0].product, product: rows[0] })
        }
    })
})

// export our index.js route to app.js
module.exports = router
