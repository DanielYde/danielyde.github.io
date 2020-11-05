let input
var x = 300
var x2 = 300
var speed = 0
var speed2 = 0
var y = 0
var hop = 0

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent(game)
}

function draw() {
  background(220);
  stroke(0);
  strokeWeight(4);
  noFill();
  circle(0, 20, 80); //sol/måne
  // Mand
  circle(x, 279 - y, 42); //hoved
  line(x, 350 - y, x, 300 - y); //krop
  line(x + 25, 350 - y, x, 300 - y); //højre arm
  line(x - 25, 350 - y, x, 300 - y); //venstre arm
  line(x, 350 - y, x - 25, 400 - y); //venstre ben
  line(x, 350 - y, x + 25, 400 - y); //højre ben
  line(0, 400, 600, 400);
  line(0, 208, 600, 208);
  circle(x + 10, 275 - y, 1);
  circle(x - 10, 275 - y, 1);
  strokeWeight(3);
  stroke('black')
  arc(x, 285 - y, 8, 8, 0, PI + QUARTER_PI, CHORD);
  // Kvinde
  circle(x2, 100 - y, 42); //hoved
  circle(x2 - 4, 135 - y, 10);
  circle(x2 + 4, 135 - y, 10);
  line(x2, 160 - y, x2, 121 - y); //krop
  line(x2 + 25, 150 - y, x2, 121 - y); //højre arm
  line(x2 - 25, 150 - y, x2, 121 - y); //venstre arm
  line(x2, 160 - y, x2 - 25, 205 - y); //venstre ben
  line(x2, 160 - y, x2 + 25, 205 - y); //højre ben
  line(0, 208, 600, 208); // Spejl
  circle(x2 + 10, 95 - y, 1);
  circle(x2 - 10, 97 - y, 1);
  strokeWeight(3);
  stroke('red')
  arc(x2, 107 - y, 8, 8, 0, PI - QUARTER_PI, CHORD);

  if (keyIsPressed) {
    speed = 15
    speed2 = -15
  }

  if (mouseIsPressed) {
    hop = 3
  }
  if (y > height - 350 && hop > 0) {
    hop = -3;

  } else {
    if (y < height - 400 && hop < 0) {
      hop = 0
    }

    if (x > width - 50 && speed > 0) {
      speed = -15;

    } else {
      if (x < width - 550 && speed < 0) {
        speed = 15
      }

      if (x2 > width - 50 && speed > 0) {
        speed2 = -15;

      } else {
        if (x2 < width - 550 && speed < 0) {
          speed2 = 15;
        }
      }
    }
  }
  

  x2 = x2 + speed2;
  x = x + speed;
  y = y + hop;
}