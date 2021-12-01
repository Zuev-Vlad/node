const express = require('express');
const port = 8080;
const app = express();
const path = require('path')

const bodyParser = require('body-parser')

const routerUser = require('./api/users/UserRouter')
const routerSettings = require('./api/appSettings/appSettings');
const AuthRouter = require('./api/auth/AuthRouter');

const multer = require('multer');
const forms = multer();

const urlencodedParser = bodyParser.urlencoded({
    extended: true,
})

// FormData parser
app.use(forms.array())

// Body Parser Use
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser());

// Express all
app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,accept,access_token,X-Requested-With');
    next();
});

// routerUser
app.use('/api/users/', routerUser)

app.use('/api/auth/', AuthRouter)

// site settings
app.use('/api/settings/', routerSettings)


app.get('/api/test/', (req, res) => {
    res.send(JSON.stringify({ success: true }))
})


// Static file
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log('Example app listening at port ' + port)
})