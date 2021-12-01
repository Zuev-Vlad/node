const express = require('express')
const Libs = require('../Libs/Libs')
const AuthRouter = express.Router()
const USER_MODEL = require('./../../models/User')


const USER = new USER_MODEL()



AuthRouter.post('/', (req, res) => {
    res.send(Libs.sendRespSuccess([req.headers]))
    const login = req.body ? req.body.login : null
    const password = req.body ? req.body.password : null

    if (!login) Libs.sendRespError('Не задан логин!')
    if (!password) Libs.sendRespError([req.body])

    USER.login({ login, password }).then(resp => {
        res.send(Libs.sendRespSuccess([req.body]))
    })

})


module.exports = AuthRouter