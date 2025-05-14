// Handle GET, POST, PUT, DELETE requests that are pointed towards index

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // render our view
    res.render('products', { title: 'Products' })
})

router.get('/pokemon/:type', (req, res) => {
    res.send(req.params)
})

// export our index.js route to app.js
module.exports = router
