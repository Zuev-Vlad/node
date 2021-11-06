const express = require('express');
const port = 8080;
const app = express();
const path = require('path')

const routerUser = require('./api/users/UserRouter')
const routerSettings = require('./api/appSettings/appSettings');
const AuthRouter = require('./api/auth/AuthRouter');


// routerUser
app.use('/api/users/', routerUser)

app.use('/api/auth/', AuthRouter)

// site settings
app.use('/api/settings/', routerSettings)


app.get('/api/test/', (req, res) => {
    res.send(JSON.stringify({ success: true }))
})



app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log('Example app listening at port ' + port)
})