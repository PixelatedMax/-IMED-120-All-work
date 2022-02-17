let bgColor = 'cyan';
let mClick;

function setup() {
    
  createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw() {
background(bgColor);
    
  
if (mouseIsPressed === true){
    fill('red')
    noStroke();
    ellipse(200, 200, 300, 300);
} else {
    fill('orange')
    ellipse(200, 200, 300, 300);
}
}

function mousePressed() {
if (bgColor == 'cyan') {
        bgColor = 'black';
} else {
    bgColor = 'cyan';
}
}