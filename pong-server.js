var http = require('http');
var Static = require('node-static');
var WebSocketServer = new require('ws'),
    server = new WebSocketServer.Server({ port: 8081 });

var players = [];

server.on('connection', function (ws) {
    players[players.length++] = ws;
    console.log("новое соединение");

    ws.on('message', function(message) {
        console.log(message);

        for (key in players)
            players[key].send(message);
    });
});

console.log("Сервер запущен на 8081");
