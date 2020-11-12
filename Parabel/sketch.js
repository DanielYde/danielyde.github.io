function setup() {
    let canvas = createCanvas(600, 600)
    canvas.parent(game)
}

var d = 0;
var globalChoice ="";

function changeVal(choice) {
    if (choice == 'val1') {
        d = d + 1;
    } else if (choice == 'val2'){
        d = d - 1;
    } else if (choice == 'val3'){
        d = d - 10;
    } else if (choice == 'val4'){
        d = d + 10;
    }
   globalChoice = d;
}
function display(){
    alert('Lines = ' + globalChoice*2);
}

function draw() {
    background(1000)
    const ax = 100;
    const ay = 500;
    const bx = 300;
    const by = 100;
    const cx = 500;
    const cy = 500;
    let n = 447.21/d;
    let i = 1;
    //Punkterne
    fill('black')
    circle(ax, ay, 10);
    circle(bx, by, 10);
    circle(cx, cy, 10);
    line(ax, ay, bx, by)
    line(bx, by, cx, cy)

    //Linjerne
    if (d <= 1000) {
        while (i<d) {    
            line(ax+((n/3)*i), ay-((n/3)*2*i), bx+((n/3)*i), by+((n/3)*2*i));
            line(cx-((n/3)*i), cy-((n/3)*2*i), bx-((n/3)*i), by+((n/3)*2*i));
            i++
        }
    }
}
