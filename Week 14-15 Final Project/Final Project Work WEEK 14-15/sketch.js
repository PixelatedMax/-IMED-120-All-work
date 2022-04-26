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
let value = 0;

function setup() {
    textAlign(CENTER, CENTER);
    createCanvas(windowWidth, windowHeight);
    strokeWeight(2);
    
    mode = 0;
    circleFinal = 0;
    score = 0;
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
        
        
        if (frameCount === 1 || frameCount % 25 === 0) {
            var content = parseInt(random(10), 10);
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
            if (circleFinal === 1 && keyCode===32) {
                fill(colors[2]);
                ellipse(width/2, height/2, 100, 100);
                mode = 2;
            } if (circleFinal === 0 && keyCode===32) {
                mode = 3;
//            } if (circleFinal === 3) {
//                mode = 2;
//            }// else if (circleFinal === 1) {
//                setTimeout(mode, 1000);
//                mode = 3;
//            }
    //Score
        fill(colors[4]);
        textSize(25);
        text('Score: ', width/2, height/2 - 200);
        
        if (score === 0) {
            text("0", width/2 + 50, height/2 - 199);
            }
        if (score === 1) {
            text("1", width/2 + 50, height/2 - 199);
            }
        if (score === 2) {
            text("2", width/2 + 50, height/2 - 199);
            }
        if (score === 3) {
            text("3", width/2 + 50, height/2 - 199);
            }
        if (score === 4) {
            text("4", width/2 + 50, height/2 - 199);
            }
        if (score === 5) {
            text("5", width/2 + 50, height/2 - 199);
            }
        if (score === 6) {
             mode = 2;
            }
    //Numbers and Text
        fill(colors[4]);
        textSize(25);
        text('Press SPACEBAR when final circle turns red', width/2, height/2 - 125);
        
        fill(colors[4]);
        textSize(40);
        text(content, width/2, height/2+100);
    //GAME FINISHED
}
//WIN SCREEN
    if (mode === 2) {
        fill(colors[4]);
        Text('You Win!', width/2, height/2);
        }
//Fail Screen
    if (mode === 3) {
        fill(colors[4]);
        text('You Fail.', width/2, height/2);
    }
}

function keyPressed() {
    if (keyCode===ENTER) {
    mode=1;
    }
    if (value === 0 && keyCode === 32) {
        value = 255;
    } else {
        value = 0;
    }
}