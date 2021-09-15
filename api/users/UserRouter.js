// routers for user
const express = require('express')
const routerUser = express.Router()

const dbConnect = require('./../../config/db')
const urlencodedParser = express.urlencoded({ extended: false });
// get all users

routerUser.get('/', (req, res) => {
    dbConnect.query('SELECT * FROM `user`', (error, result, fields) => {
        if (error) throw error;
        res.send(result)
    })
    dbConnect.end()
})

routerUser.post('/', urlencodedParser, (req, res) => {
    if (!req.body) return response.sendStatus(400);
    console.log({ req: req.body })
    return res.send('true')
})


module.exports = routerUser