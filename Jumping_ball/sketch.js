var x = 0
var speedx = 10
var speedy = 10
var y = 350



function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  ellipse(x, y, 50);
  line(0, 527, 600, 527);
  line(0, 272, 600, 272);
  if (y < height - 250 && speedy < 0) {
    speedy = 10
  } else {
    if (y > height - 150 && speedy > 0) {
      speedy = -10
    }
    if (x > width + 5) {
      x = -5
    }
  }
  y = y + speedy
  x = x + speedx
}