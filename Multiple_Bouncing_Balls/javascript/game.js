var ball = [];
var k = 0;

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
}

function setup() {
    let canvas = createCanvas(innerWidth, innerHeight);
    canvas.parent(game);
    while(k < 100) {
        k++;
        ball.push(new Ball());
    }
}

function draw() {
    background('black');
    for (var i = ball.length - 1; i >= 0; i--) {
        ball[i].render();
        ball[i].movement();
        ball[i].collide();
    }
}