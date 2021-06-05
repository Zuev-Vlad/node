// routers for user
const express = require('express')
const router = express.Router()

pp.get('/api/users/', (request, response) => {
    console.log(`URL: ${request.url}`);
    // response.send(JSON.stringify('{success: true}'));

    bdConnect.query('SELECT * FROM user', (err, res, fields) => {
        console.log('result User ', res)
        console.log(err)
        response.send(JSON.stringify(res || err));
    })

});

exports.module = router