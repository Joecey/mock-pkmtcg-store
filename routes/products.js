// Handle GET, POST, PUT, DELETE requests that are pointed towards index

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // render our view
    res.render('products', { title: 'Products' })
})

router.get('/cards', (req, res) => {
    // render our view
    res.send([
        {
            name: 'Item 1',
            description: 'This is item 1',
            price: 10.0,
        },
        {
            name: 'Item 2',
            description: 'This is item 2',
            price: 20.0,
        },
        {
            name: 'Item 3',
            description: 'This is item 3',
            price: 30.0,
        },
    ])
})

router.get('/card', (req, res) => {
    // render our view
    res.send({
        name: 'Item 1',
        description: 'This is item 1',
        price: 10.0,
    })
})

// export our index.js route to app.js
module.exports = router
