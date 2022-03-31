let myMusic1;
let playButtonMusic1;
let music1Pause;
let music1Stop;

let myMusic2;
let playButtonMusic2;
let music2Pause;
let music2Stop;

let myMusic3;
let playButtonMusic3;
let music3Pause;
let music3Stop;

let myMusic4;
let playButtonMusic4;
let music4Pause;
let music4Stop;

let myMusic5;
let playButtonMusic5;
let music5Pause;
let music5Stop;

function setup() {
  createCanvas(1000+windowWidth, 1000+windowHeight);
    background(10, 15, 25);

    var music = [
        'World Of Illusion', //0
        'Timelapse', //1
        'Beethoven', //2
        'Skogur', //3
        'HawaiiGoose', //4
    ]
//Music 1
    playButtonMusic1 = createButton (music[0]);
    playButtonMusic1.position(500+18,100+50);
    playButtonMusic1.mousePressed(myMusic1);
    
    music1Pause = createButton ('Pause');
    music1Pause.position(500+0,150+50);
    music1Pause.mousePressed(pauseMusic1);
    
    music1Stop = createButton ('stop');
    music1Stop.position(500+100,150+50);
    music1Stop.mousePressed(stopMusic1);
//Music 2
    playButtonMusic2 = createButton (music[1]);
    playButtonMusic2.position(500+35,200+100);
    playButtonMusic2.mousePressed(Music2);
    
    music2Pause = createButton ('Pause');
    music2Pause.position(500+0,200+150);
    music2Pause.mousePressed(pauseMusic2);
    
    music2Stop = createButton ('stop');
    music2Stop.position(500+100,200+150);
    music2Stop.mousePressed(stopMusic2);
//Music 3
    playButtonMusic3 = createButton (music[2]);
    playButtonMusic3.position(500+30,300+150);
    playButtonMusic3.mousePressed(Music3);
    
    music3Pause = createButton ('Pause');
    music3Pause.position(500+0,250+250);
    music3Pause.mousePressed(pauseMusic3);
    
    music3Stop = createButton ('stop');
    music3Stop.position(500+100,250+250);
    music3Stop.mousePressed(stopMusic3);
//Music 4
    playButtonMusic4 = createButton (music[3]);
    playButtonMusic4.position(500+45,400+200);
    playButtonMusic4.mousePressed(Music4);
    
    music4Pause = createButton ('Pause');
    music4Pause.position(500+0,300+350);
    music4Pause.mousePressed(pauseMusic4);
    
    music4Stop = createButton ('stop');
    music4Stop.position(500+100,300+350);
    music4Stop.mousePressed(stopMusic4);
//music 5
    playButtonMusic5 = createButton (music[4]);
    playButtonMusic5.position(500+15,400+350);
    playButtonMusic5.mousePressed(Music5);
    
    music5Pause = createButton ('Pause');
    music5Pause.position(500+0,300+500);
    music5Pause.mousePressed(pauseMusic5);
    
    music5Stop = createButton ('stop');
    music5Stop.position(500+100,300+500);
    music5Stop.mousePressed(stopMusic5);
}

function draw() {
//Boxes
    fill(100, 30, 0);
    rect(400, 50, 350, 850, 40);
//Play Icons
    fill(0);
    beginShape();
        vertex(475+0, 138+0);
        vertex(475+0, 138+25);
        vertex(475+25, 138+12.5);
    endShape(CLOSE);

    fill(0);
    beginShape();
        vertex(475+0, 300+0);
        vertex(475+0, 300+25);
        vertex(475+25, 300+12.5);
    endShape(CLOSE);
    
    fill(0);
    beginShape();
        vertex(475+0, 462+0);
        vertex(475+0, 462+25);
        vertex(475+25, 462+12.5);
    endShape(CLOSE);
    
    fill(0);
    beginShape();
        vertex(475+0, 581+0);
        vertex(475+0, 581+25);
        vertex(475+25, 581+12.5);
    endShape(CLOSE);
    
    fill(0);
    beginShape();
        vertex(475+0, 745+0);
        vertex(475+0, 745+25);
        vertex(475+25, 745+12.5);
    endShape(CLOSE);
}
function Music1() {
  myMusic1.play();
}
function pauseMusic1(){
    myMusic1.pause();
}
function stopMusic1(){
    myMusic1.stop();
    console.log('Music has stopped')
}
function Music2() {
  myMusic2.play();
}
function pauseMusic2(){
    myMusic2.pause();
}
function stopMusic2(){
    myMusic2.stop();
    console.log('Music has stopped')
}
function Music3() {
  myMusic3.play();
}
function pauseMusic3(){
    myMusic3.pause();
}
function stopMusic3(){
    myMusic3.stop();
    console.log('Music has stopped')
}
function Music4() {
  myMusic4.play();
}
function pauseMusic4(){
    myMusic4.pause();
}
function stopMusic4(){
    myMusic4.stop();
    console.log('Music has stopped')
}
function Music5() {
  myMusic5.play();
}
function pauseMusic5(){
    myMusic5.pause();
}
function stopMusic5(){
    myMusic5.stop();
    console.log('Music has stopped')
}

function preload() {
    var music = [
        'World Of Illusion.mp3', //0
        'Timelapse.mp3', //1
        'Beethoven.mp3', //2
        'Skogur.mp3', //3
        'HawaiiGoose.mp3', //4
    ]
        myMusic1 = loadSound(music[0]);
        myMusic2 = loadSound(music[1]);
        myMusic3 = loadSound(music[2]);
        myMusic4 = loadSound(music[3]);
        myMusic5 = loadSound(music[4]);
}