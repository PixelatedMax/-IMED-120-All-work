function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
    background(220);
    strokeWeight(1);
}

function draw() {
var w = 100;
var h = 375;
    
for (let wK = 0; wK < 14; wK++) {
    fill(255);
    rect(100 + (wK*100), 100, w, h, 20);
}
for (let bK = 0; bK < 2; bK++) {
    fill(0);
    rect(155 + (bK*105), 100, w - 25, h - 125, 20);
    
    fill(0);
    rect(855 + (bK*105), 100, w - 25, h - 125, 20);
}    
for (let bK2 = 0; bK2 < 3; bK2++) {
    fill(0);
    rect(455 + (bK2*105), 100, w - 25, h - 125, 20);
    
    fill(0);
    rect(1155 + (bK2*105), 100, w - 25, h - 125, 20);
}
}