let Leftx = 0
let Lefty = 0
let Rightx = 0
let Righty = 0
let Ellipsex = 300
let Ellipsey = 300
let Rect1y = 0


  function setup() {
    createCanvas(600, 600);
    frameRate(60)
  }
  
  function draw() {
    background(220);
    ellipse(Ellipsex, Ellipsey, 50);
    rect(550, Rect1y, 20, 200)
  }
