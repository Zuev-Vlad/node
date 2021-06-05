const express = require('express');
const port = 3000;
const app = express();
const db = require('./config/db')
const path = require('path')

const routerUser = require('./api/users/UserRouter')


// routerUser
app.use(routerUser)

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '/', 'public/index.html'))
})


app.listen(port, () => {
    console.log('Example app listening at http://localhost:' + port)
})