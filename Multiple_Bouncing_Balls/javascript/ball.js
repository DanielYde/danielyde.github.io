class Ball {
    constructor() {
        let x = innerWidth/2;
        let y = innerHeight/2;
        let r = int(random(20, 40));
        let xMovement = random(-10, 10);
        let yMovement = random(-10, 10);
        let randomColor = int(random(1, 7));

        while(xMovement == 0 || xMovement < 2 && xMovement > 2) {
            xMovement = random(-10, 10);
        }
        while(yMovement == 0 || yMovement < 2 && yMovement > 2) {
            yMovement = random(-10, 10);
        }

        this.render = function() {
            if (randomColor == 1) {
                fill('red');
            }
            if (randomColor == 2) {
                fill('blue');
            }
            if (randomColor == 3) {
                fill('green');
            }
            if (randomColor == 4) {
                fill('yellow');
            }
            if (randomColor == 5) {
                fill('orange');
            }
            if (randomColor == 6) {
                fill('purple');
            }
            circle(x, y, r);
        }

        this.movement = function() {
            x = x + xMovement;
            y = y + yMovement;
        }

        this.collide = function() {
            // Højre og Venstre side a skærmen
            if (x > innerWidth - r/2 || x < 0 + r/2) {
                xMovement = -xMovement;
            }
            if (y > innerHeight - r/2 || y < 0 + r/2) {
                yMovement = -yMovement;
            }
        }
    }
}