class Ball {

  constructor() {
    //Color
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    this.ballC = color(r, g, b);
    this.strokeC = color(100, 60, 120);

    //Size
    this.size = random(25, 75);
    this.radius = this.size / 2;

    let x = x * width;
    let y = y * height;

    this.pos = createVector(x, y);

    //Speed
    let xSpeed = random(-5, 5);
    let ySpeed = random(-5, 5);
    this.speed = createVector(xSpeed, ySpeed);
  }

  move() {
    this.pos = this.pos.add(this.speed);
    this.size = this.size;
  }

  bounce() {
    if (this.pos.x <= 0 + this.radius || this.pos.x >= width - this.radius) {
      this.speed.x = this.speed.x * -1;
    }

    if (this.pos.y <= 0 + this.radius || this.pos.y >= height - this.radius) {
      this.speed.y = this.speed.y * -1;
    }
  } //End bounce.

  display() {


    stroke(this.strokeC);
    strokeWeight(3);
    fill(this.ballC);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}