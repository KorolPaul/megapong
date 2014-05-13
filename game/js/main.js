window.onload = function () {
    var width = window.innerWidth, 
        height = window.innerHeight;

    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    var blockWidth = width / 40,
        firstPlayerX = 20,
        firstPlayerY = 20,
        playerIndent = firstPlayerX,
        secondPlayerX = width - playerIndent - blockWidth,
        secondPlayerY = 20,
        ballX = width / 2,
        ballY = height / 2,
        playerHeight = 150,
        playerSpeed = height / 10,
        ballSpeedX = 10,
        ballSpeedY = 10;

    canvas.width = width;
    canvas.height = height;

    ctx.fillRect(firstPlayerX, firstPlayerY, blockWidth, playerHeight);
    ctx.fillRect(secondPlayerX, secondPlayerY, blockWidth, playerHeight);
    ctx.fillRect(ballX, ballY, blockWidth, blockWidth);

    var inteval = setInterval(gameRender, 12);

    function gameRender() {
        if (ballX + blockWidth >= width || ballX <= 0) {
            ballSpeedX = - ballSpeedX;
        }
        if (ballY + blockWidth >= height || ballY <= 0) {
            ballSpeedY = -ballSpeedY;
        }
        if ((ballX + blockWidth >= secondPlayerX && ballY + blockWidth >= secondPlayerY && ballY < secondPlayerY + playerHeight)
            || (ballX <= firstPlayerX + blockWidth && ballY + blockWidth >= firstPlayerY && ballY < firstPlayerY + playerHeight)) {
            ballSpeedX = -ballSpeedX;
        }

        ballX += ballSpeedX;
        ballY += ballSpeedY;

        ctx.clearRect(0, 0, width, height);
        ctx.fillRect(ballX, ballY, blockWidth, blockWidth);
        ctx.fillRect(firstPlayerX, firstPlayerY, blockWidth, playerHeight);
        ctx.fillRect(secondPlayerX, secondPlayerY, blockWidth, playerHeight);
    }

    var socket = io.connect('http://megapong-12856.onmodulus.net/:8081');
    socket.on('message', function (message) {
        console.log(message);
        switch (message) {
            case 'down':  //down
                if (firstPlayerY + playerHeight < height)
                    firstPlayerY += playerSpeed;
                break;
            case 'up': //up
                if (firstPlayerY > 0)
                    firstPlayerY -= playerSpeed;
                break;
                /*case 98:  //down 2
                    if (secondPlayerY + playerHeight < height)
                        secondPlayerY += playerSpeed;
                    break;
                case 104: //up 2
                    if (secondPlayerY > 0)
                        secondPlayerY -= playerSpeed;
                    break;
                    */
        }
    });
    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 40:  //down
                if (firstPlayerY + playerHeight < height)
                    firstPlayerY += playerSpeed;
                break;
            case 38: //up
                if (firstPlayerY > 0)
                    firstPlayerY -= playerSpeed;
                break;
            case 98:  //down 2
                if (secondPlayerY + playerHeight < height)
                    secondPlayerY += playerSpeed;
                break;
            case 104: //up 2
                if (secondPlayerY > 0)
                    secondPlayerY -= playerSpeed;
                break;
        }
    }
}









