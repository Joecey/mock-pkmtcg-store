// Handle GET, POST, PUT, DELETE requests that are pointed towards index

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // render our view
    res.render('cart', { title: 'Your Cart' })
})

router.get('/completed', (req, res) => {
    const referer = req.get('Referer') || ''

    if (referer.includes('/cart')) {
        res.render('completed-order', { title: 'Purchased' })
    } else {
        res.redirect('/')
    }
})

// export our index.js route to app.js
module.exports = router
