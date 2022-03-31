function setup() {
  // WEEK 4
    createCanvas(500, 600);
    noLoop();
    noStroke();
    
    var colors = [
//0
        'red',
//1
        'yellow',
//2
        'green',
//3
        'white',
//4
        'black',
//5
        'blue',
    ]
//red    
    fill(colors[0]);
        rect(300, 450, 120, 75);
//Yellow
    fill(242, 221, 27);
        beginShape(colors[1]);
            vertex(0+300, 0+450);
            vertex(120+300, 0+450);
            vertex(40+300, 75+450);
            vertex(0+300, 75+450);
        endShape();
//Green
    fill(colors[2]);
        triangle(0+300, 0+450, 80+300, 0+450, 0+300, 75+450);
    
//Denmark
    fill(colors[0]);
        rect(300, 350, 120, 75);
//Horizontal Line
    fill(colors[3]);
        rect(0+300, 30+350, 120, 10);
//Horizontal Line
    fill(colors[3]);
        rect(25+300, 0+350, 10, 75);

//OLYMPIC FLAG
    fill(colors[3]);
        stroke(1);
        strokeWeight(1);
        rect(250, 250, 120, 75);
//Circle 1
    noFill();
        stroke(colors[5]);
        strokeWeight(4);
        ellipse(30+250, 31+250, 30, 30);
//Circle 2
    noFill();
        stroke(colors[1]);
        strokeWeight(4);
        ellipse(45+250, 46+250, 30, 30);
//Circle 3
    noFill();
        stroke(colors[4]);
        strokeWeight(4);
        ellipse(60+250, 31+250, 30, 30);
//Circle 4
    noFill();
        stroke(colors[2]);
        strokeWeight(4);
        ellipse(75+250, 46+250, 30, 30);
//Circle 5
    noFill();
        stroke(colors[0]);
        strokeWeight(4);
        ellipse(90+250, 31+250, 30, 30);
}