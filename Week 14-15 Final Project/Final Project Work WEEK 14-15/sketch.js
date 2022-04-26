var colors = [
    'blue', //0
    'red', //1
    'green', //2
    'black', //3
    'white', //4
    [125, 43, 29],
]
var content = '';
var playerInput;
var circleFinal;
var mode;
var winScreen;
var failScreen;
let score;

function setup() {
    textAlign(CENTER, CENTER);
    createCanvas(windowWidth, windowHeight);
    strokeWeight(2);
    
    mode = 0;
    score = 0;
    circleFinal = 0;
    playerInput = false;
    winScreen = false;
    failScreen = false;
}

function draw() {
    clear();
    background(125, 43, 29);
//MENU
    if (mode==0) {
        fill(colors[4]);
        textSize(40);
        text('Menu', width/2, height/2 - 100);
        textSize(24.7218789);
        text('Press SPACEBAR when final circle glows red', width/2, height/2 - 50);
        textSize(24.7218789);
        text('ENTER to START', width/2, height/2);
    }
//GAME IS HERE
    if (mode==1) {
        if (frameCount === 1 || frameCount % 30 === 0) {
            var content = parseInt(random(3), 3);
        }
    //CIRCLE
            if (content === 0) {
                circleFinal = 1;
                }
            if (content > 0) {
                circleFinal = 0;
                }
            if (circleFinal === 0) {
                fill(colors[0]);
                ellipse(width/2, height/2, 100, 100);
                }
            if (circleFinal === 1){
                fill(colors[1]);
                ellipse(width/2, height/2, 100, 100);
                }
            if (circleFinal === 3){
                fill(colors[2]);
                ellipse(width/2, height/2, 100, 100);
                }
    //User Input
            if (circleFinal === 1 && playerInput === true) {
                fill(colors[2]);
                ellipse(width/2, height/2, 100, 100);
                score = score + 1;
            } if (circleFinal === 0 && playerInput === true) {
                mode = 3;
            } if (circleFinal === 3) {
                mode = 2;
            }
    //SCORE
        fill(colors[4]);
        textSize(25);
        text('Score: ' + score, width/2, height/2 - 200);
        if (score === 50) {
             mode = 2;
        }
    //Numbers and Text
        fill(colors[4]);
        textSize(25);
        text('Press SPACEBAR when final circle turns red', width/2, height/2 - 125);
        text('Reach a score of 50 to win', width/2, height/2 - 80);
        
        fill(colors[5]);
        textSize(40);
        text(content, width/2, height/2+100);
    //GAME FINISHED
}
//WIN SCREEN
    if (mode === 2) {
        fill(colors[4]);
        text('You Win!', width/2, height/2);
        }
//Fail Screen
    if (mode === 3) {
        fill(colors[4]);
        text('You Fail.', width/2, height/2);
    }
}

function keyPressed() {
    if (keyCode === 32) {
        playerInput = true;
    }
    if (playerInput === true) {
        setTimeout(endInput, 50);
    }
    
    if (keyCode===ENTER) {
        mode=1;
    }
}

function endInput() {
    if (playerInput === true) {
        playerInput = false;
    }
}