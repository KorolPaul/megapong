var http = require('http');
var WebSocketServer = new require('ws'),
    server = new WebSocketServer.Server({ port: 8080 });

var players = [];

server.on('connection', function (ws) {
    players[players.length++] = ws;
    console.log("new connection");

    ws.on('message', function(message) {
        console.log(message);

        for (key in players)
            players[key].send(message);
    });
});

console.log("Server started at 8080");
