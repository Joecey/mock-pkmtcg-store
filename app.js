// Entry point for our MPA application
// Import pacakges as needed
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

// import our routes
const indexRouter = require('./routes/index')
const productsRouter = require('./routes/products')
const aboutRouter = require('./routes/about')

// setup express server with ejs templating
const app = express()
const port = 3000
app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.json()) // let's us handle json data
app.use(express.urlencoded({ extended: true })) // lets us handle url query strings
app.use(express.static('public')) // lets us serve static files from public folder

// setup main layout page so we can carry over head, navbar, and footer
app.use(expressLayouts)
app.set('layout', './layouts/baseLayout') // default layout to use

// setup routing from our routes file
app.use('/', indexRouter) // This allows us to handle GET, POST, etc... on specific routes
app.use('/products', productsRouter)
app.use('/about', aboutRouter)

app.use((_req, res, _next) => {
    res.status(404).render('404', { title: 'Page Not Found' })
})

// start the server
app.listen(port, () => {
    console.log('Server is now running on port ' + port)
})
