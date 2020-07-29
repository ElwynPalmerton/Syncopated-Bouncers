let b;
let balls = [];
let bgc; //background color.

//Sequencing variables
let more = true; //Used in sequencing.
let index = 0;
let run = true;


function mousePressed() {
  run = !run;
  loop();
}

function setup() {
  br = random(0, 255);
  bg = random(0, 255);
  bb = random(0, 255);

  createCanvas(windowWidth, windowHeight);
  bgc = color(br, bg, bb);
  background(bgc);
  for (let i = 0; i < 4; i++) {
    b = new Ball(30, objects[i].x, objects[i].y, 1, 1);  //Add name later.
    balls.push(b);
  };

  sequencing();
}


function draw() {
  if (run) {
    ellipse(50, 50, 50, 50);
    background(bgc);
    for (let i = 0; i < balls.length; i++) {
      balls[i].move();
      balls[i].bounce();
      balls[i].display();
    }
  } else {
    noLoop();
  }


}

//Add this sequening to the other video programs.
//Modularize the sequencing programs so that it can take different kinds of objects.
//Make a version of this which can add different kinds of "bubble" objects (the bouncing balls, the growing/shrinking balls, the moving at random balls, etc..) Systemize these into one program and give them each an "official" name.