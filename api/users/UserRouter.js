// routers for user
const express = require('express')
const routerUser = express.Router()

const db = require('./../../config/db')

// get all users

routerUser.get('/', (req, res) => {
    res.send(JSON.stringify({ success: true }))
})

// routerUser.route('/api/users/', (request, response) => {
//     response.send(JSON.stringify({ success: true }))
//     // db.query('SELECT * FROM user', (err, res, fields) => {
//     //     response.send(JSON.stringify(res || err));
//     // })

// });

module.exports = routerUser