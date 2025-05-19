const express = require('express')
const router = express.Router()
const auth = require('../packages/auth')

router.get('/', (req, res) => {
    // render our view
    res.render('login', { title: 'Login' })
})

router.get('/profile', (req, res) => {
    // render our view
    res.render('account', { title: 'My Account' })
})

router.post('/check-auth', (req, res) => {
    const { username, password } = req.body

    // if there is a valid user
    if (username && password && auth.isAuthenticated({ user: username, password })) {
        res.status(200).json({ success: true })
    } else {
        // If not:
        res.status(401).json({ error: 'Unauthorized' })
    }
})

// export our index.js route to app.js
module.exports = router
