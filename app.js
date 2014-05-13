var http = require('http').createServer(handler),
    server = require('socket.io').listen(http);

http.listen(8081);
/*var WebSocketServer = new require('ws'),
    server = new WebSocketServer.Server({ port: 8081 });*/

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

console.log("Server started at 8080");

function handler(req, res) {
    res.writeHead(200);
    res.end(data);
}