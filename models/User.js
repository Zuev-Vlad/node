const DB = require('../config/db')
const db = new DB()


module.exports = class USER_MODEL {

    constructor() {
        this.test = 'Success'
    }

    async login({ login = '', password = '' } = {}) {
        return new Promise(res => {
            db.connecting()
                .promise()
                .query(`SELECT * FROM user WHERE login = '${login}'`)
                .then(([rows, fields]) => {
                    res(rows)
                    db.con.end()
                    console.log('tut', rows)
                })
                .catch(console.log);
            
        })

    }
}