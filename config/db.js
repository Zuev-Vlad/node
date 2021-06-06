const mysql = require('mysql')

const dbConfig = {
    host: 'localhost',
    // host: 'vzuiya4u.beget.tech',
    user: 'vzuiya4u_node',
    password: 'Arina2016!',
    database: 'vzuiya4u_node'
}

const db = mysql.createPool(dbConfig)
    // db.connect()

module.exports = db;