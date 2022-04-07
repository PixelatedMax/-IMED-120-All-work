let osc;
let key = 'orange';

function setup() {
    createCanvas(1800, 800);
    background(220);
    strokeWeight(1);
    
    osc = new p5.Oscillator();
    osc.setType("sine");
    osc.freq(0);
    osc.amp(1000);
    osc.start();
}

function draw() {
    var w = 100;
    var h = 500;
    
    for (let wK = 0; wK < 15; wK++) {
        fill(255);
        rect(100 + (wK*100), 100, w, h, 20);
    }
    for (let bK = 0; bK < 2; bK++) {
        fill(0);
        rect(155 + (bK*105), 100, w - 25, h - 150, 20);
    
        fill(0);
        rect(855 + (bK*105), 100, w - 25, h - 150, 20);
    }
    for (let bK2 = 0; bK2 < 3; bK2++) {
        fill(0);
        rect(455 + (bK2*105), 100, w - 25, h - 150, 20);
    
        fill(0);
        rect(1155 + (bK2*105), 100, w - 25, h - 150, 20);
    }
//Sounds
    
//C Key
    if((mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 600 &&       mouseIsPressed) || keyIsDown(65) ){
        osc.freq(261.63);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }

//D Key
    if((mouseX > 200 && mouseX < 300 && mouseY > 100 && mouseY < 600 &&       mouseIsPressed) || keyIsDown(83) ){
        osc.freq(293.665);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }

//E Key
    if((mouseX > 300 && mouseX < 400 && mouseY > 100 && mouseY < 600 &&       mouseIsPressed) || keyIsDown(68) ){
        osc.freq(329.628);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
//F Key
    if((mouseX > 400 && mouseX < 500 && mouseY > 100 && mouseY < 600 &&       mouseIsPressed) || keyIsDown(70) ){
        osc.freq(349.228);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
//G Key
    if((mouseX > 500 && mouseX < 600 && mouseY > 100 && mouseY < 600 &&       mouseIsPressed) || keyIsDown(71) ){
        osc.freq(391.995);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
//A Key
    if((mouseX > 600 && mouseX < 700 && mouseY > 100 && mouseY < 600 &&       mouseIsPressed) || keyIsDown(72) ){
        osc.freq(440.00);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
//B Key
    if((mouseX > 700 && mouseX < 800 && mouseY > 100 && mouseY < 600 &&       mouseIsPressed) || keyIsDown(74) ){
        osc.freq(493.883);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
//C Key
    if((mouseX > 800 && mouseX < 900 && mouseY > 100 && mouseY < 600 &&       mouseIsPressed) || keyIsDown(90) ){
        osc.freq(261.63*2);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
//D Key
    if((mouseX > 900 && mouseX < 1000 && mouseY > 100 && mouseY < 600 &&       mouseIsPressed) || keyIsDown(88) ){
        osc.freq(293.665*2);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
//E Key
    if((mouseX > 1000 && mouseX < 1100 && mouseY > 100 && mouseY < 600 &&       mouseIsPressed) || keyIsDown(67) ){
        osc.freq(329.628*2);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
//F Key
    if((mouseX > 1100 && mouseX < 1200 && mouseY > 100 && mouseY < 600 &&       mouseIsPressed) || keyIsDown(86) ){
        osc.freq(349.228*2);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
//G Key
    if((mouseX > 1200 && mouseX < 1300 && mouseY > 100 && mouseY < 600 &&       mouseIsPressed) || keyIsDown(66) ){
        osc.freq(391.995*2);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
//A Key
    if((mouseX > 1300 && mouseX < 1400 && mouseY > 100 && mouseY < 600 &&       mouseIsPressed) || keyIsDown(78) ){
        osc.freq(440.00*2);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
//B Key
    if((mouseX > 1400 && mouseX < 1500 && mouseY > 100 && mouseY < 600 &&       mouseIsPressed) || keyIsDown(77) ){
        osc.freq(493.883*2);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
    //C Key
    if((mouseX > 1500 && mouseX < 1600 && mouseY > 100 && mouseY < 600 &&       mouseIsPressed) || keyIsDown(188) ){
        osc.freq(261.63*4);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }

//Sharps
//C#
    if((mouseX > 150 && mouseX < 230 && mouseY > 100 && mouseY < 450 &&       mouseIsPressed) || keyIsDown(87) ){
        osc.freq(277.18);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
//D#
    if((mouseX > 250 && mouseX < 330 && mouseY > 100 && mouseY < 450 &&       mouseIsPressed) || keyIsDown(69) ){
        osc.freq(311.127);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
//F#
    if((mouseX > 450 && mouseX < 530 && mouseY > 100 && mouseY < 450 &&       mouseIsPressed) || keyIsDown(82) ){
        osc.freq(740/2);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
//G#
    if((mouseX > 550 && mouseX < 630 && mouseY > 100 && mouseY < 450 &&       mouseIsPressed) || keyIsDown(84) ){
        osc.freq(415.305);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
//A#
    if((mouseX > 650 && mouseX < 730 && mouseY > 100 && mouseY < 450 &&       mouseIsPressed) || keyIsDown(89) ){
        osc.freq(466.16);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
//C#
    if((mouseX > 850 && mouseX < 930 && mouseY > 100 && mouseY < 450 &&       mouseIsPressed) || keyIsDown(85) ){
        osc.freq(277.18*2);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
//D#
    if((mouseX > 950 && mouseX < 1030 && mouseY > 100 && mouseY < 450 &&       mouseIsPressed) || keyIsDown(73) ){
        osc.freq(311.127*2);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
//F#
    if((mouseX > 1150 && mouseX < 1230 && mouseY > 100 && mouseY < 450 &&       mouseIsPressed) || keyIsDown(79) ){
        osc.freq(740/2*2);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
//G#
    if((mouseX > 1250 && mouseX < 1330 && mouseY > 100 && mouseY < 450 &&       mouseIsPressed) || keyIsDown(80) ){
        osc.freq(415.305*2);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
//A#
    if((mouseX > 1350 && mouseX < 1430 && mouseY > 100 && mouseY < 450 &&       mouseIsPressed) || keyIsDown(219) ){
        osc.freq(466.16*2);
        osc.amp(1000, 0.05);
        osc.start(0.1);
        osc.stop(0.5);
    }
}