var colors = [
    'blue', //0
    'green', //1
    'red', //2
    'black', //3
    'white', //4
    [125, 43, 29],
]
var success
var wins
var score

var circle1
var circle2
var circle3
var circleFinal

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(colors[5]);
    strokeWeight(2);
}

function draw() {
clear();
//Goal
    background(colors[5]);
    fill(colors[4]);
    textSize(25);
    text('Press any button when final circle turns red', width/2 - 250, height/2 - 125);
    
    fill(colors[4]);
    textSize(25);
    text('Score: ', width/2 - 50, height/2 - 200);
    circle1 = true;
    circle2 = true;
    circle3 = true;
    circleFinal = true;
//Bottom Bar
    fill(212, 138, 59);
    rect(width/2 - 150, height/2 + 20, 275, 10);
//Frame Count
    var content = frameCount
    fill(colors[5])
    textSize(32);
    text(content, 50, 50);
//Clear Condition
    if (frameCount > 160 && keyCode === 32) {
        success = true;
    }
    if (frameCount > 180) {
        success = false;
    }
    if (success === true) {
        fill(colors[3]);
        ellipse(50, 50, 50, 50);
    }
//Circle1
    if (frameCount > 40) {
        circle1 = false
    }
    if (circle1 === true) {
        fill(colors[0]);
        ellipse(width/2 - 110, height/2, 50, 50);
    }
    if (circle1 === false){
        fill(colors[1]);
        ellipse(width/2 - 110, height/2, 50, 50);
    }
//circle2
    if (frameCount > 80) {
        circle2 = false;
    }
    if (circle2 === true) {
        fill(colors[0]);
        ellipse(width/2 - 55, height/2, 50, 50);
    }
    if (circle2 === false){
        fill(colors[1]);
        ellipse(width/2 - 55, height/2, 50, 50);
    }
//circle3
    if (frameCount > 120) {
        circle3 = false;
    }
    if (circle3 === true) {
        fill(colors[0]);
        ellipse(width/2, height/2, 50, 50);
    }
    if (circle3 === false){
        fill(colors[1]);
        ellipse(width/2, height/2, 50, 50);
    }
//circleFINAL
    if (frameCount > 160) {
        circleFinal = false;
    }
    if (frameCount > 180) {
        circleFinal = true
    }
    if (circleFinal === true) {
        fill(colors[0]);
        ellipse(width/2 + 75, height/2 - 25, 100, 100);
    }
    if (circleFinal === false){
        fill(colors[2]);
        ellipse(width/2 + 75, height/2 - 25, 100, 100);
    }
//Fail Conditions
    if (frameCount < 160 && keyCode === 32) {
        color(colors[4]);
        rect(1000, 1000, 1000, 1000);
    }
}

function getGameScore(score) {
    for (var i = 0; i < score.length; i++) {
        var item = score[i];
        if (item === true) {
            wins = wins + 1;
        }
    }
}


function keyPressed() {
    if (keyCode===32) {
    mode=1;
    }
    if (value === 0 && keyCode === 32) {
    value = 255;
    } else {
    value = 0;
    }
}