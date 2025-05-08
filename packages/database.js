const mysql = require('mysql2')

let connection = null

const initDatabase = ({ host, user, password, database }) => {
    console.log('Initializing database connection...')
    connection = mysql.createConnection({
        host,
        user,
        password,
        database,
    })
}

const getConnection = () => {
    console.log('Getting database connection...')
    return connection
}

module.exports = { initDatabase, getConnection }
