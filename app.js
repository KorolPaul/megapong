var express = require('express'),
        app = express();

app.get('/', function (req, res) {
    console.log('Request received: ' + req.url);
    res.send('Hello World!');
});


app.listen('8080');
console.log('Modulus demo app started on port 8080');