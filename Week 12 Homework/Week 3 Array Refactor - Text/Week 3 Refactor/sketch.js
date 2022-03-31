function preload() {
  myFont = loadFont('PottaOne-Regular.ttf');
}

function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
    background(222);
    
     var poem = [
         'Today you are YOU',
         'that is truer than true.',
         'There is no one alive who is',
         'Youer than YOU.',
         '- Dr. Seuss',
    ];
    textSize(20);
    textFont(myFont);
    for (let p = 0; p < poem.length; p++){
        text(poem[p], 225, 100+50*p, 1000, 100);
    }
    
    var colors = [
        'red', 'orange', 'yellow', 'green', 'blue', 'purple',
        'red', 'orange', 'yellow', 'green', 'blue', 'purple',
        'red', 'orange', 'yellow', 'green', 'blue', 'purple',
        'red', 'orange', 'yellow', 'green', 'blue', 'purple',
        'red', 'orange', 'yellow', 'green', 'blue', 'purple',
    ];
    for (let i = 0; i < 30; i++){
        fill(colors[i]);
        ellipse(width-25, height-25, 500+i-(i*15));
    }
}

function draw() {
  // put drawing code here
    
}