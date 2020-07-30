function addEvenColumn([numberToAdd, startingX, xSpeed, size, color]) {
  for (let i = 1; i <= numberToAdd; i++) {
    //args: color, size, x, y, xSpeed, ySpeed, name;
    b = new Ball(color, size, startingX, i / (numberToAdd + 1), xSpeed, 0);  //Add name later.
    balls.push(b);
  }
}

function addColumn(numberToAdd) {
  console.log("Adding Column");
  for (let i = 0; i < numberToAdd; i++) {

    b = new Ball(palette[i], options[i].size, options[i].x, options[i].y, options[i].xSpeed, 0);  //Add name later.
    balls.push(b);
  }
}

function addBall2(color, size, x, y, xSpeed, ySpeed, name) {
  //args: color, size, x, y, xSpeed, ySpeed, name;
  b = new Ball(color, size, x, y, xSpeed, ySpeed, name);  //Add name later.
  balls.push(b);
};

function addBall([color, size, x, y, xSpeed, ySpeed, name]) {
  //args: color, size, x, y, xSpeed, ySpeed, name;
  b = new Ball(color, size, x, y, xSpeed, ySpeed, name);  //Add name later.
  balls.push(b);
};

function addBallsTwo(options) {
  for (let i = 0; i < options.length; i++) {
    //args: color, size, x, y, xSpeed, ySpeed, name;
    let o = options[i];
    addBall2(o.color, o.size, o.x, o.y, o.xSpeed, o.ySpeed, o.name);
  }
};

function addBalls(numberToAdd, objects) {
  for (let i = 0; i < numberToAdd; i++) {
    //args: color, size, x, y, xSpeed, ySpeed, name;
    b = new Ball(palette[i], options[i].size, options[i].x, options[i].y, options[i].xSpeed, options[i].ySpeed);  //Add name later.
    balls.push(b);
  }
};

function removeBalls(removeElementsQuantity) {
  balls.splice(0, removeElementsQuantity);
};
