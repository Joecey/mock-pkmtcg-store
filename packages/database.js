const mysql = require('mysql')

let connection = null

const initDatabase = () => {}

const getConnection = () => (connection ? connection : null)

module.exports = { initDatabase, getConnection }
