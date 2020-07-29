
let section = [
  {
    f: addBalls,
    args: 3,
    //Other variables can go here.
    //This should get an array of objects (size, position, speed);
    //AND a color palette object.
    //The functions need to be refactored to accommodate these factors.
  },
  {
    f: addColumn,
    args: 4,
  },
  {
    f: removeBalls,
    args: 1,
  }
];

//There can be simple yet limited as well as complex yet robust versions of various functions. 
//addRow, addColumn, spreadRow, spreadColumn, starburst, staircase, 
//evenRow, and evenColumn, 
//Versions of these that take different combinations of variables but do similar things.
//Make a list of what type of objects and arguments each of these need.
//Do they need an object or just the list of arguments?
//Set up ball so that it has default values for all of the arguments if they aren't passed in.

function addColumn(numberToAdd) {
  for (let i = 0; i < numberToAdd; i++) {
    //args: color, size, x, y, xSpeed, ySpeed, name;
    b = new Ball(palette[i], objects[i].size, objects[i].x, objects[i].y, objects[i].xSpeed, 0);  //Add name later.
    balls.push(b);
  }
}


function addBalls(numberToAdd) {
  for (let i = 0; i < numberToAdd; i++) {
    //args: color, size, x, y, xSpeed, ySpeed, name;
    b = new Ball(palette[i], objects[i].size, objects[i].x, objects[i].y, objects[i].xSpeed, objects[i].ySpeed);  //Add name later.
    balls.push(b);
  }
};


function removeBalls(removeElementsQuantity) {
  balls.splice(0, removeElementsQuantity);
};



function sequencing() {
  i = i % section.length;
  let intervalTwo = setTimeout(() => {
    section[i].f(section[i].args);
    i++;
    if (i < section.length) {
      sequencing();
    }
  }, 1000);
}


