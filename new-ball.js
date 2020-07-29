class Ball {

  //Add in color later:
  constructor(size, x, y, xSpeed, ySpeed, name) {
    //Color
    let r = 0;
    let g = 0;
    let b = 0;

    this.ballC = color(r, g, b);
    this.strokeC = color(100, 60, 120);
    this.name = name;

    //Size
    this.size = size;
    this.radius = this.size / 2;

    //The following three lines could probably all be refactored into one line:
    let xPos = x * width;
    let yPos = y * height;

    this.pos = createVector(xPos, yPos);

    //Speed
    let xVelocity = xSpeed;
    let yVelocity = ySpeed;
    this.speed = createVector(xVelocity, yVelocity);
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