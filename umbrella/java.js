var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var dropWidth = 20;
var dropHeight = 20;
var dropRate = 2;
var rightPressed = false;
var leftPressed = false;
var numOfDrops = 10;

var droplist = [];
for(var i = 0; i<numOfDrops;i++){
    droplist.push(i);
    droplist[i] = {x: Math.floor(Math.random() * 11)*50+1, y: 0, status: 0};
};


/*droplist[0].status = 1;
droplist[1].status = 0;
function drawDrops(){
    for(i = 0;i<droplist.length; i++){
            var dropX = droplist[i].x;
            var dropY = (i*(200+dropHeight)-400);
            droplist[i].y = dropY+dropRate;
            ctx.beginPath();
            ctx.rect(dropX, droplist[i].y, dropWidth, dropHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
            //dropY=dropY-520;
       }
};*/
/*
var droplist1 = []
for(i+0; i<dropNum; i++){
    droplist1[i] = {x:0,y:0,status = 0}
}
for(i=0;i<droplist1; i++){
    if(droplist[i-1].y>200){
        drawnewdrop()
    }
}
*/
droplist[0].status = 0;
droplist[1].status = 0;
function drawDrops(){
    for(i = 0;i<droplist.length; i++){
       if(droplist[i].status == 0){
            //var dropX = Math.floor(Math.random() * 11)*20;
            var dropX = droplist[i].x;
            var dropY = (i*(100+dropHeight)-(numOfDrops*(100+dropHeight)));
            droplist[i].y = dropY+dropRate;
            ctx.beginPath();
            ctx.rect(dropX, droplist[i].y, dropWidth, dropHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
            //dropY=dropY-520;
            /*if(droplist[numOfDrops-1].y>200){
                if(i+1<droplist.length){
                    droplist[i+1].status = 1;
                }
            };*/
       }
}
};
//this print bottom  drops first
function newDrop(){
    for(i=0;i<droplist.length; i++){
        if(droplist[i].y+droprate>150){
            droplist[i+1].status = 1;
        }
    }
}

/*function drawDrops(){
    var dropX = 20;
    var dropY = 20;
    ctx.beginPath();
    ctx.rect(dropX, dropY + dropRate, dropWidth, dropHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}*/

alert(Math.floor(Math.random() * 11));

document.addEventListener("keydown",keydownhandler,false);
document.addEventListener("keyup",keyuphandler,false);

function keydownhandler(e){
    if(e.key == "Right" || e.key == "ArrowRight"){
        rightPressed = true;
        alert('hi');
    }
    else if(e.key == "Left" || e.key == "ArrowLeft"){
        leftPressed = true;

    }
};
function keyuphandler(e){
    if(e.key == "Right" || e.key == "ArrowRight"){
        rightPressed =fFalse;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft"){
        leftPressed = false;
    }
};

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDrops();
    dropRate += 2;

}

var internal = setInterval(draw,10)


/*var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var lives = 3;
var bricksbroken = 0;
var droprate = 0;

var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}
function collisionDetection() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    bricksbroken+=1
                }
            }
        }
    }
}

function drawLives(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}
function drawBricksbroken(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Bricks Broken: "+bricksbroken, canvas.width-195, 20);
}
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawBricks() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            //run random num/if random num>5
            //randomnum = brackx
            if (bricks[c][r].status == 1) {
                var brickX = (c * ((brickWidth) + brickPadding)) + brickOffsetLeft;
                var brickY = (r * ((brickHeight) + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY+droprate, brickWidth, brickHeight);
                ctx.fillStyle = "#00205DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();
    drawLives();
    drawBricksbroken();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    }
    else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            if (y = y - paddleHeight) {
                dy = -dy;
            }
        }
        else {
            lives = lives -1;
            alert("one life lost")
            dy=-dy;
            if(lives === 0){
                alert("GAME OVER");
                //document.location.reload();
                clearInterval(interval); // Needed for Chrome to end game
            }
        }
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
    droprate+=2;

}
alert("use left right arrows or mouse to move paddle")

var interval = setInterval(draw, 10);*/

