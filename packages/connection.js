const mysql = require('mysql2')

// library to load environment variables from .env file
const dotenv = require('dotenv')
dotenv.config()

const connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
})

module.exports = connection
