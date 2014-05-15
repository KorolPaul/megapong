var express = require('express'),
        app = express();

app.get('/', function (req, res) {
    console.log('Request received: ' + req.url);
    res.send('Hello World!');
});


app.listen(process.env.PORT);
console.log('Modulus demo app started on port 8080');

/*
var http = require('http'),
    server = require('socket.io').listen(http);
http.listen(8081);

var players = [];

server.sockets.on('connection', function (ws) {
    players[players.length++] = ws;
    console.log("new connection");

    ws.on('message', function (message) {
        console.log(message);

        for (key in players)
            players[key].emit('message', message);
    });
});
*/
