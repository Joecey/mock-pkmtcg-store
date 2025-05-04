// Entry point for our MPA application
// Import pacakges as needed
const express = require('express')
const indexRouter = require('./routes/index')

// setup express server with ejs templating
const app = express()
const port = 3000
app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.json()) // let's us handle json data
app.use(express.urlencoded({ extended: true })) // lets us handle url query strings
app.use(express.static('public')) // lets us serve static files from public folder

// setup routing from our routes file
app.use('/', indexRouter) // This allows us to handle GET, POST, etc... on specific routes

// start the server
app.listen(port, () => {
    console.log('Server is now running on port ' + port)
})
