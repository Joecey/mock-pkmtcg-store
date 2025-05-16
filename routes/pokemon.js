// Handle GET, POST, PUT, DELETE requests that are pointed towards index

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // render our view
    res.render('pokemon-not-found', { title: 'Pokemon Not Found' })
})

// export our index.js route to app.js
module.exports = router
