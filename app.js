var express = require('express'),
        app = express();

app.get('/', function (req, res) {
    console.log('Request received: ' + req.url);
    res.send('Hello World!');
});


app.listen(parseInt(process.env.PORT));
console.log('Modulus demo app started on port 8080');


var http = require('http');
var httpServer = http.createServer(function (request, response) {
    request.addListener('end', function () {
        clientFiles.serve(request, response);
    });
}).listen(parseInt(process.env.PORT));
//http.listen(parseInt(process.env.PORT));

var players = [];
var webSocket = socketIO.listen(httpServer);
webSocket.on('connection', function (ws) {
    players[players.length++] = ws;
    console.log("new connection");

    ws.on('message', function (message) {
        console.log(message);

        for (key in players)
            players[key].emit('message', message);
    });
});

