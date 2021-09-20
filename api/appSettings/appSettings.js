// routers for user
const express = require('express')
const routerSettings = express.Router()

const urlencodedParser = express.urlencoded({
    extended: false
});

const DB = require('./../../config/db')

let db = new DB()

routerSettings.get('/menu/', (req, res) => {
    db.connecting()
        .promise()
        .query('SELECT * FROM `menu_item`')
        .then(([rows, fields]) => {
            res.send(db.getSuccessTemplate({ data: rows }))
        })
        .catch(console.log)
        .then(() => db.connecting.end());
})



module.exports = routerSettings