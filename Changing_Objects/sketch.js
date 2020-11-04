function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(150);
    
    line(0, 200, 150, 200)
    line(250, 200, 400, 200)
    line(200, 0, 200, 150)
    line(200, 250, 200, 400)
    fill(165)
    rect(150, 150, 100)
    var x = mouseX;
    var y = mouseY;

    if (x > 200 && y < 150 || x > 250 && y < 200) {
        fill(20, 20, 20)
        square(x-50/2, y-50/2, 50)         
    }

    if (x < 200 && y < 150 || x < 150 && y < 200) {
        fill('red')
        circle(x, y, 50)
    }

    if (x < 200 && y > 250 || x < 150 && y > 200) {
        fill(20, 20, 20)
        square(x-25/2, y-25/2, 25)
    }

    if (x > 200 && y > 250 || x > 250 && y > 200 ) {
        fill('red')
        circle(x, y, 25)        
    }

    if (x > 150 && x < 250 && y < 250 && y > 150) {
        fill('blue')
        triangle(x, y - 10, x - 10, y + 10, x + 10, y + 10)
        
    }
  }