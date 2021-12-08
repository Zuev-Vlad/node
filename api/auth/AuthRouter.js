const express = require('express')
const Libs = require('../Libs/Libs')
const AuthRouter = express.Router()
const USER_MODEL = require('./../../models/User')
const cookieParser = require('cookie-parser')

const USER = new USER_MODEL()



// AuthRouter.use(cookieParser())


AuthRouter.post('/', (req, res) => {
    // cookieParser()
    res.cookie('token', 'vasy').send(Libs.sendRespSuccess([req.headers]))
    const login = req.body ? req.body.login : null
    const password = req.body ? req.body.password : null

    

    if (!login) Libs.sendRespError('Не задан логин!')
    if (!password) Libs.sendRespError([req.body])
    return
    USER.login({ login, password }).then(resp => {
        res.cookie('token', 'vasy').send(Libs.sendRespSuccess([req.body]))
    })

})


module.exports = AuthRouter