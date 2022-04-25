var mode;
let value = 0;

function setup() {
    textAlign(CENTER, CENTER);
    createCanvas(windowWidth, windowHeight);
    
    mode = 0;
}

function draw() {
    clear();
    background(125, 43, 29);
    fill('white');
    
    if (mode==0) {
        textSize(40);
        text('Menu', width/2, height/2 - 100);
        textSize(24.7218789);
        text('Press SPACEBAR when final circle glows red', width/2, height/2 - 50);
        textSize(24.7218789);
        text('ENTER to START', width/2, height/2);
    }
    if (mode==1) {
        ellipse(100,100,100,100);
    }
    fill(value);
    rect(25, 25, 50, 50);
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