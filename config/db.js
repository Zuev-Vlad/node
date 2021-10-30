const mysql = require('mysql2')

const dbConfig = {
    // host: 'localhost',
    host: 'vzuiya4u.beget.tech',
    user: 'vzuiya4u_node',
    password: 'Arina2016!',
    database: 'vzuiya4u_node'
}


module.exports = class DB {
    constructor() {
        this.mySql = mysql
        this.isConnecting = false
        this.con = false
    }
    getSuccessTemplate({ data = '' }) {
        return {
            success: true,
            data: data
        }
    }
    connecting() {
        if (this.con) return this.con
        this.con = this.mySql.createConnection(dbConfig)
        return this.con
    }
};