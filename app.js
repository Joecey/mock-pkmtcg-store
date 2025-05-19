// Entry point for our MPA application
// Import pacakges as needed
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

// import our routes
const indexRouter = require('./routes/index')
const productsRouter = require('./routes/products')
const cartRouter = require('./routes/cart')
const loginRouter = require('./routes/login')
const pokemonRouter = require('./routes/pokemon')

// import out required packages + setup auth
const auth = require('./packages/auth')
auth.addUser({ user: 'user@123.com', password: 'pass' })

// connect to the database, and return error if it fails
const connection = require('./packages/connection')

// setup express server with ejs templating
const app = express()
const port = 3000
app.set('views', 'views') // set our views to access templates
app.set('view engine', 'ejs') // use ejs as our templating engine
app.use(express.json()) // let's us handle json data
app.use(express.urlencoded({ extended: true })) // lets us handle url query strings
app.use(express.static('public')) // lets us serve static files from public folder

// setup main layout page so we can carry over head, navbar, and footer
app.use(expressLayouts)
app.set('layout', './layouts/baseLayout') // default layout to use for all pages

// setup routing from our routes file
app.use('/', indexRouter) // This allows us to handle GET, POST, etc... on specific routes
app.use('/products', productsRouter)
app.use('/cart', cartRouter)
app.use('/login', loginRouter)
app.use('/pokemon', pokemonRouter)

app.use((_req, res, _next) => {
    res.status(404).render('404', { title: 'Page Not Found' })
})

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to the database!', err.message)
        process.exit(-1)
    } else {
        console.log('Connected to database!')
        // start the server
        app.listen(port, () => {
            console.log('Server is now available at', `http://localhost:${port}/`)
        })
    }
})
