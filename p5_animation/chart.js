let circles = [];
let canvasOpacity = 1; 
let fadeSpeed = 0.05; 
let showText = false; 

var w = window.innerWidth;
var h = window.innerHeight;

function setup() {
    canvas = createCanvas(w, h);
    for (let i = 0; i < 50; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(5, 40);
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
    background(255, 255, 255);
    for (let i = 0; i < circles.length; i++) {
        for (let j = i + 1; j < circles.length; j++) {
            let d = dist(circles[i].x, circles[i].y, circles[j].x, circles[j].y);
            if (d < 100) {
                let colorChoice = random(); 
                if (colorChoice < 0.5) {
                    stroke(113, 255, 170); // green 
                } else {
                    stroke(43, 241, 255); // blue 
                }
                strokeWeight(0.5);
                line(circles[i].x, circles[i].y, circles[j].x, circles[j].y);
            }
        }
    }
    for (let i = 0; i < circles.length; i++) {
        circles[i].move();
        circles[i].display();
    }

    // if (window.pageYOffset > 0) {
    //     canvasOpacity -= fadeSpeed;
    //     canvasOpacity = constrain(canvasOpacity, 0, 1); 
    //   }
    //   canvas.style.opacity = canvasOpacity;
    // // canvas.style('opacity', canvasOpacity);

    //   if (canvasOpacity === 0) {
    //     showText = true;
    //     textSize(72);
    //     textAlign(CENTER, CENTER)
    //     fill(0);
    //     noStroke();
    //     text("hello", w / 2, h / 2);
        
    //   }
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
        stroke(0, 0, 0);
        strokeWeight(0.5);
        fill(this.c);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
}
