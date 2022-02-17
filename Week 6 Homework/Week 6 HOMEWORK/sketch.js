let button1;
let button2;
let button3;
let button4;
let button5;
let button6;
let button7;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230);
    noStroke();
//Red Button
    button1 = createButton('Red');
    button1.position(500, 100);
    button1.mousePressed(changeColor1);
//Green Button
    button2 = createButton('Green');
    button2.position(750, 100);
    button2.mousePressed(changeColor2);
//Blue Button 
    button3 = createButton('Blue');
    button3.position(1000, 100);
    button3.mousePressed(changeColor3);
//Yellow Button 
    button4 = createButton('Yellow');
    button4.position(1250, 100);
    button4.mousePressed(changeColor4);
 //Black Button 
    button5 = createButton('Black');
    button5.position(250, 100);
    button5.mousePressed(changeColor5);
//White Button 
    button6 = createButton('White');
    button6.position(1600, 100);
    button6.mousePressed(changeColor6);
//Eraser Button 
    button7 = createButton('Eraser');
    button7.position(875, 150);
    button7.mousePressed(changeColor7);
}

function changeColor1() {
  let val1 = fill(252, 3, 3);
  background(val);
}
function changeColor2() {
  let val2 = fill(61, 176, 26);
  background(val);
}
function changeColor3() {
  let val3 = fill(75, 125, 204);
  background(val);
}
function changeColor4() {
  let val3 = fill(255, 196, 0);
  background(val);
}
function changeColor5() {
  let val3 = fill(0);
  background(val);
}
function changeColor6() {
  let val3 = fill(255);
  background(val);
}
function changeColor7() {
  let val3 = fill(230);
  background(val);
}

//Pen Tool
function draw() {
    if (mouseIsPressed === true) {
    ellipse(mouseX, mouseY, 10, 10);
  }
  print(mouseIsPressed);
}