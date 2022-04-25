function setup() {
    createCanvas(400,400);
    background(0);
    menu();
}

function draw() {
}

function menu() {
    background(120,0,255);
    button=createButton("Normal Multiplayer");
    button.position(135,60);

    button2=createButton("Multiplayer ball frenzy");
    button2.position(130,180);
    button2.mousePressed(MultiplayerFrenzy);

    button3=createButton("Singleplayer (use mouse)");
    button3.position(125,260);
    button3.mousePressed(Singleplayer);

    textSize(32);
    fill(0);
    text("PONG",95,30);
    textSize(12);
    fill(0);
    text("Play with your keyboard",130,100);
    text("Guide your paddle with the mouse",115,295);
}

function Singleplayer() {
clear();
hideButtons();
text("single player",width/2,height/2)
var paddleLx;
var paddleLy;
var paddleRx;
var paddleRy;
var ballX;
var ballY;
var ballVx;
var ballVy;
var ballSize = 20;
var paddleWidth = 20;
var paddleHeight = 120;
var bigWidth = (ballSize + paddleWidth)/2;
var bigHeight = (ballSize + paddleHeight)/2;
var gameOn = 0;
var ticker = 0;
var LScore = 0;
var RScore = 0;
var r2 = 0;
var b2 = 255;
let balls = [];
}

function restart() {
paddleLx = 22;
paddleLy = 300;
paddleRx = 777;
paddleRy = 300;
ballX = paddleLx + ballSize;
ballY = paddleRy;
ballVx = 0;
ballVy = 0;
}