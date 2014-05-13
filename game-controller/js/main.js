window.onload = function () {
    var socket = io.connect('http://megapong-12856.onmodulus.net:8081');
    var up = document.getElementById('up'),
        down = document.getElementById('down');

    up.onclick = function () {
        socket.emit('message', 'up');
    };
    down.onclick = function () {
        socket.emit('message', 'down');
    };
    socket.onerror = function (error) {
        console.log(error);
    };
}









