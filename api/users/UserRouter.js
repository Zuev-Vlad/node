// routers for user
const express = require('express')
const routerUser = express.Router()
const jwt = require('jsonwebtoken')

const DB = require('./../../config/db')
const libs = require('./../Libs/Libs')
const urlencodedParser = express.urlencoded({
    extended: false
});
// get all users

const db = new DB()


routerUser.get('/', (req, res) => {
    db.connecting()
        .promise()
        .query('SELECT * FROM `user`')
        .then(([rows, fields]) => {
            // console.log(rows)
            res.send(libs.sendRespSuccess(rows))
            db.con.end()
        })
        .catch(console.log);
})

routerUser.post('/', urlencodedParser, (req, res) => {
    if (!req.body) return response.sendStatus(400);
    console.log({
        req: req.body
    })
    return res.send('true')
})


module.exports = routerUser