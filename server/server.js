const express = require('express')
const app = express();
const path = require('path')

const port = 9000

const myLogger = (req, res, next) => {
    console.log('LOGGED')
    console.log(`${req.method} ${req.url} ${req.connection.remoteAddress} ${req.headers['x-forwarded-for']}`)
    next()
}
  
app.use(myLogger)

// serve static files before gatsbyExpress
app.use(express.static('public/'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, function () {
    console.log("Server is running on "+ port +" port");
})