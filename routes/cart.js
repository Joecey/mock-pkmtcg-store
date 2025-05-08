// Handle GET, POST, PUT, DELETE requests that are pointed towards index

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // render our view
    res.render('cart', { title: 'Your Cart' })
})

router.post('/complete-order', (req, res) => {
    res.send('complete order POST', { title: 'TODO COMPLETE PURCHASE' })
})

// export our index.js route to app.js
module.exports = router
