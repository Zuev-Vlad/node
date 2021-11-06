const express = require('express')
const DB = require('../../config/db')
const Libs = require('../Libs/Libs')
const AuthRouter = express.Router()
const bodyParser = require('body-parser')


const db = new DB()
const urlencodedParser = bodyParser.urlencoded({
    extended: false,
})


AuthRouter.post('/', urlencodedParser, (req, res) => {
    
    res.send(Libs.sendRespSuccess([req.body.test]))
})

module.exports = AuthRouter