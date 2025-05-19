// Handle GET, POST, PUT, DELETE requests that are pointed towards index

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // render our view
    res.render('login', { title: 'Login' })
})

router.get('/profile', (req, res) => {
    // render our view
    res.render('account', { title: 'My Account' })
})

router.post('/check-auth', (req, res) => {
    console.log(req.body)
    res.status(200).json({ success: true })

    // If not authorized:
    // res.status(401).json({ error: 'Unauthorized' })
})

// export our index.js route to app.js
module.exports = router
