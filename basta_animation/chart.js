let circles = [];

var w = window.innerWidth;
var h = window.innerHeight;

function setup() {
    canvas = createCanvas(w, h);
    for (let i = 0; i < 70; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(5, 40);
        // let c = color(random(['#00A3E1', '#85C540', '#FFC507', '#D04D9D']));
        let c = color(255);
        circles.push(new Circle(x, y, r, c));
    }
}

window.onresize = function () {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.size(w, h);
}

function draw() {  
    // A rectangle
    rect(20, 20, w - 40, h - 40);
    background('#00A3E1');
    for (let i = 0; i < circles.length; i++) {
        for (let j = i + 1; j < circles.length; j++) {
            let d = dist(circles[i].x, circles[i].y, circles[j].x, circles[j].y);
            if (d < 100) {
                // let colorChoice = random();
                // if (colorChoice < 0.5) {
                //     stroke(113, 255, 170); // green 
                // } else {
                //     stroke(43, 241, 255); // blue 
                // }
                stroke(255);
                strokeWeight(0.5);
                line(circles[i].x, circles[i].y, circles[j].x, circles[j].y);
            }
        }
    }
    for (let i = 0; i < circles.length; i++) {
        circles[i].move();
        circles[i].display();
    }


}

class Circle {
    constructor(x, y, r, c) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;
        this.vx = random(-1, 1);
        this.vy = random(1, -1);
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) {
            this.vx = -this.vx;
        }
        if (this.y < 0 || this.y > height) {
            this.vy = -this.vy;
        }
    }

    display() {
        stroke(this.c);
        strokeWeight(1);
        fill('#00A3E1');
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
}
