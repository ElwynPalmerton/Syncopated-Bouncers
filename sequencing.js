
let red = { r: 250, g: 50, b: 100 };
let peach = { r: 250, g: 100, b: 100 };

let sequence1 = [
  {
    color: red,
    size: 60,
    x: 0.5,
    y: 0.5,
    xSpeed: -2,
    ySpeed: -2     //color, size, x, y, xSpeed, ySpeed, name
  },
  {
    color: peach,
    size: 60,
    x: 0.7,
    y: 0.7,
    xSpeed: -2.2,
    ySpeed: -2.2     //color, size, x, y, xSpeed, ySpeed, name
  }
];

let sequence2 = [
  {
    color: { r: 100, g: 100, b: 100 },
    size: 30,
    x: 0.1,
    y: 0.1,
    xSpeed: 2,
    ySpeed: 2     //color, size, x, y, xSpeed, ySpeed, name
  },
  {
    color: { r: 100, g: 200, b: 100 },
    size: 30,
    x: 0.9,
    y: 0.9,
    xSpeed: -2,
    ySpeed: -2     //color, size, x, y, xSpeed, ySpeed, name
  }
];

let section = [
  {
    f: addBallsTwo,
    args: sequence1,
  },
  {
    f: addBallsTwo,   //args: color, size, x, y, xSpeed, ySpeed, name;
    args: sequence2,
  },
  {
    f: addBallsTwo, //number of balls to add
    args: sequence1,
  },
  {
    f: removeBalls,
    args: 3,
  },
  {
    f: addBallsTwo,
    args: sequence2,
  },

];

function addBallsTwo(options) {
  for (let i = 0; i < options.length; i++) {
    //args: color, size, x, y, xSpeed, ySpeed, name;
    let o = options[i];
    addBall2(o.color, o.size, o.x, o.y, o.xSpeed, o.ySpeed, o.name);
  }
};

function sequencing() {
  i = i % section.length;
  let intervalTwo = setTimeout(() => {
    section[i].f(section[i].args);
    i++;
    if (i < 10) {
      sequencing();
    }
  }, 1000);
}


