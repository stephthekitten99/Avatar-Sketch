let xLeft = 160;
let xRight = 240;
let y = 180;

var stars = [];

function setup() {
  createCanvas(400, 400);
  background(220);
  backgroundSquares();
  
   for (var i = 0; i < 200; i++) {
     stars[i]= new Star();
   }
  
  
}

function draw() {
 smileyFace();
  
  //Stars
  for (var i = 0; i < stars.length; i++) {
    stars[i].draw();
  }
  
}
function backgroundSquares(){
    //top row of Squares
  fill(100,149,237)
  rect(1,1,50,50)
  fill(204,204,255)
  rect(50,1,50,50)
  fill(204,204,255)
  rect(100,1,50,50)
  fill(159,226,191)
  rect(150,1,50,50)
  rect(200,1,50,50)
  rect(250,1,50,50)
  fill(223,255,0)
  rect(300,1,50,50)
  rect(350,1,50,50)
  
  //Second Row of Squares
  rect(1,50,50,50)
  rect(50,50,50,50)
  rect(100,50,50,50)
  fill(222,49,99)
  rect(150,50,50,50)
  fill(204,204,255)
  rect(200,50,50,50)
  rect(250,50,50,50)
  rect(300,50,50,50)
  rect(350,50,50,50)
  
   //Third Row of Squares
  rect(1,100,50,50)
  fill(222,49,99)
  rect(50,100,50,50)
  rect(100,100,50,50)
  fill(255,127,80)
  rect(150,100,50,50)
  fill(64,224,208)
  rect(200,100,50,50)
  rect(250,100,50,50)
  fill(255,191,0)
  rect(300,100,50,50)
  rect(350,100,50,50)
  
   //Fourth Row of Squares
  fill(159,226,191)
  rect(1,150,50,50)
  rect(50,150,50,50)
  rect(100,150,50,50)
  rect(150,150,50,50)
  rect(200,150,50,50)
  fill(100,149,237)
  rect(250,150,50,50)
  rect(300,150,50,50)
  rect(350,150,50,50)
  
   //Fifth Row of Squares
  fill(204,204,255)
  rect(1,200,50,50)
  fill(100,149,237)
  rect(50,200,50,50)
  fill(64,224,208)
  rect(100,200,50,50)
  rect(150,200,50,50)
  fill(159,226,191)
  rect(200,200,50,50)
  rect(250,200,50,50)
  rect(300,200,50,50)
  fill(255,191,0)
  rect(350,200,50,50)

 //Sixth Row of Squares
  rect(1,250,50,50)
  rect(50,250,50,50)
  fill(223,255,0)
  rect(100,250,50,50)
  rect(150,250,50,50)
  rect(200,250,50,50)
  rect(250,250,50,50)
  rect(300,250,50,50)
  fill(159,226,191)
  rect(350,250,50,50)
  
   //Seventh Row of Squares
  rect(1,300,50,50)
  rect(50,300,50,50)
  fill(100,149,237)
  rect(100,300,50,50)
  rect(150,300,50,50)
  rect(200,300,50,50)
  rect(250,300,50,50)
  fill(222,49,99)
  rect(300,300,50,50)
  rect(350,300,50,50)
  
   //Eight Row of Squares
  fill(192,192,192)
  rect(1,350,50,50)
  rect(50,350,50,50)
  rect(100,350,50,50)
  rect(150,350,50,50)
  rect(200,350,50,50)
  rect(250,350,50,50)
  rect(300,350,50,50)
  rect(350,350,50,50)
  
  
}
function smileyFace(){
     // Face
      fill(255,255,0,200);
      circle(200,200,250)
  
  //Smile
      fill(0,0,0,200)
      arc(200, 250, 80, 80, 0, PI + QUARTER_PI, CHORD);
  
  //eyes
  // Eye balls
  noStroke();
  fill(255);
  ellipse(160, 180, 60);
  ellipse(240, 180, 60);

  // Pupils
  fill(0);
  ellipse(xLeft, y, 35);
  ellipse(xRight, y, 25);
  
  y = map(mouseY, 0, height, 170, 190, true);
  xLeft = map(mouseX, 0, width, 150, 170, true);
  xRight = map(mouseX, 0, width, 230, 250, true);
  
  
}
class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(0.25,3);
    this.t = random(TAU);
  }
  
  draw(){
    this.t += 0.1;
    var scale = this.size + sin(this.t) * 2;
    fill(164,90,224)
    noStroke();
    ellipse(this.x, this.y, scale, scale);
  }
}