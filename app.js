var http = require('http'),
    server = require('socket.io').listen(http);

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(8080);

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

