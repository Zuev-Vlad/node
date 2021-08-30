const express = require('express');
const port = 3000;
const app = express();
const db = require('./config/db')
const path = require('path')

const routerUser = require('./api/users/UserRouter')


// routerUser

app.use('/api/users/', routerUser)



app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log('Example app listening at http://localhost:' + port)
})