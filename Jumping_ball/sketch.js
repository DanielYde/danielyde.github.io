var x = 0
var speedx = 10
var speedy = 10
var y = 200



function setup() {
  let canvas = createCanvas(600, 200);
  canvas.parent(game)
}

function draw() {
  background(150);
  fill(200) 
  ellipse(x, y, 50);

  if (y < height - 175 && speedy < 0) {
    speedy = 10
  } else {
    if (y > height - 25 && speedy > 0) {
      speedy = -10
    }
    if (x > width + 26) {
      x = -26
    }
  }
  y = y + speedy
  x = x + speedx
}
