const express = require('express');
const port = 3000;
const app = express();

// const db = require('../config/db')


app.get('/api/', (request, response) => {
    console.log(`URL: ${request.url}`);
    // response.send(JSON.stringify('{success: true}'));
    response(JSON.stringify({ success: true, request }))
        // db.query('SELECT * FROM user', (err, res, fields) => {
        //     console.log('result User ', res)
        //     console.log(err)
        //     response.send(JSON.stringify(res || err));
        // })

});


app.listen(port, () => {
    console.log('Example app listening at http://localhost:' + port)
})

// var http = require('http');
// var express = require('express')
// var server = http.createServer(function(req, res) {
// res.writeHead(200, { 'Content-Type': 'text/plain' });
// res.end('the server runs on http');
// });
// server.listen(3000);