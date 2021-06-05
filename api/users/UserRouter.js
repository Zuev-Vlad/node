// routers for user
const express = require('express')
const routerUser = express.Router()

const db = require('./../../config/db')

// get all users
routerUser.get('/api/users/', (request, response) => {
    db.query('SELECT * FROM user', (err, res, fields) => {
        response.send(JSON.stringify(res || err));
    })

});

module.exports = routerUser