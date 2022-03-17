let x = 60;
let y = 150;

let input;
let percentTip15;
let percentTip20;
let percentTip25;
let percentTip30;

function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
    background(222);
    textSize(24);
    text('Calculate Tip', 60, 40);
    
    input = createInput();
    input.position(x, y);
    input.size(230);
//18% Tip
    percentTip15 = createButton('15%');
    percentTip15.position(x, y+(y/3));
    percentTip15.mousePressed
    (function() {tipCalculator(0.15)});
//20% Tip    
    percentTip20 = createButton('20%');
    percentTip20.position(x*2, y+(y/3));
    percentTip20.mousePressed(function() {tipCalculator(0.20)});
//25% Tip    
    percentTip25 = createButton('25%');
    percentTip25.position(x*3, y+(y/3));
    percentTip25.mousePressed(function() {tipCalculator(0.25)});
//30% Tip    
    percentTip30 = createButton('30%');
    percentTip30.position(x*4, y+(y/3));
    percentTip30.mousePressed(function() {tipCalculator(0.30)});
}

function tipCalculator(percent) {
    fill(0);
    textSize(24);
    text('you need to pay $' + input.value() * percent +
    ' for tips.', x, 375*percent);
}

function draw() {
    beginShape();
        fill(120, 150, 255);
        vertex(40,120);
        vertex(330,120);
        vertex(330,120*2);
        vertex(40,120*2);
        vertex(40,120);
    endShape();
}