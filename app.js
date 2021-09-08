const express = require('express');
const port = 8081;
const app = express();
const db = require('./config/db')
const path = require('path')

const routerUser = require('./api/users/UserRouter')


// routerUser

app.use('/api/user/', routerUser)

app.get('/api/test/', (req, res) => {
    res.send(JSON.stringify({ success: true }))
})



app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log('Example app listening at port ' + port)
})