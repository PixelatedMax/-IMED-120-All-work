let imgCongo;
let imgDenmark;
let inp;
let btm;

function preload() {
        imgCongo = loadImage('Congo.png');
imgDenmark = loadImage('Denmark.jpg');
}

function setup() {
    // put setup here
    createCanvas(windowWidth, windowHeight);
    background(222);
    
//user input
    textSize(25);
    text('Type your flag: Congo VS Denmark', 50, 50);
    
    inp = createInput();
    inp.position(20, 60);
    inp.size (100);
    inp.input(showInput);
    inp.input (showInput);
    
    btn = createButton('Submit');
    btn.position(150, 60);
    btn.mousePressed(showImage);
    
    console.log('I am in setup');
}

function showImage() {
//if user types Congo, show Congo Flag
    console.log('Show Image:', inp.value());
    
    if(inp.value() == "Congo")
    {
        image(imgCongo, 150, 200, 300, 310);  
    } 
    if(inp.value() == "congo")
{
        image(imgCongo, 150, 200, 300, 310);  
    } 
//if user types Denmark, show Denmark Flag
    else if(inp.value() == "Denmark")
    {
        image(imgDenmark, 550, 200, 300, 310);    
    }
    else if(inp.value() == "denmark")
    {
        image(imgDenmark, 550, 200, 300, 310);    
    }
}

function showInput() {
    text(this.value(), 20, 120);
    console.log('You are typing', this.value());
}