var colors = [
    'blue',
    'green',
    'red',
    'black',
]

function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
    background(222);
    strokeWeight(2);
    
    fill(colors[3]);
    textSize(25);
    text('Press Spacebar when final circle turns red', width/2 - 250, height/2 - 150);
//Bottom Bar
    fill(212, 138, 59);
    rect(width/2 - 150, height/2 + 20, 275, 10)
//Circles
    fill(colors[0]);
    ellipse(width/2 - 110, height/2, 50, 50);
    fill(colors[0]);
    ellipse(width/2 - 55, height/2, 50, 50);
    fill(colors[0]);
    ellipse(width/2, height/2, 50, 50);
    fill(colors[0]);
    ellipse(width/2 + 75, height/2 - 25, 100, 100);
}

function draw() {
}

function keyPressed() {
//Spacebar
    keyCode(32);
    console.log('it worked');
}