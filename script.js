var angle = 0;
var slider;
var lengthT = 100;
var colorT = 255;
var speedT = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  angle = angle + speedT / 20000 * PI;
  stroke(colorT);
  translate(200, height)
  branch(lengthT);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }

}

function colorTF() {
  colorT = "#" + (Math.floor(Math.random() * 16777215)).toString(16);
}

function speedTF() {
  speedT = (Math.floor(Math.random() * 100));
}

function lengthTF() {
  lengthT = (Math.floor(Math.random() * 200));
}
