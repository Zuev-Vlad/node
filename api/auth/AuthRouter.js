const express = require('express')
const DB = require('../../config/db')
const Libs = require('../Libs/Libs')
const AuthRouter = express.Router()
const bodyParser = require('body-parser')
const USER_MODEL = require('./../../models/User')

const USER = new USER_MODEL()


const db = new DB()

const urlencodedParser = bodyParser.urlencoded({
    extended: false,
})


AuthRouter.post('/', urlencodedParser, (req, res) => {
    USER.login({ login: 'vasy', password: '123123' }).then(resp => {
        res.send(Libs.sendRespSuccess([req.body]))
    })

})


module.exports = AuthRouter