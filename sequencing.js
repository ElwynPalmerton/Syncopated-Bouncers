

let sequence = [1, -2, 3, -4, 4, 2, 1, 2];


//I could also do names colors?
//And calculated values?
//Have the sequencing function call a function in an array?
let palette = [
  {
    r: 0,
    g: 0,
    b: 0,
  },
  {
    r: 0,
    g: 0,
    b: 0,
  },
  {
    r: 0,
    g: 0,
    b: 0,
  },
  {
    r: 0,
    g: 0,
    b: 0,
  }
];


objects = [
  //Color - This should be in a separate array or set of variables.
  //size
  //x, y position.
  //xSpeed, ySpeed.  -Create this as indivisual variables and then set-up as vectors.
  //name.
  {
    size: 30,
    x: 0.2,
    y: 0.2,
    xSpeed: 1,
    ySpeed: 2,
  },
  {
    size: 20,
    x: 0.4,
    y: 0.4,
    xSpeed: -1,
    ySpeed: 2,
  },
  {
    size: 40,
    x: 0.6,
    y: 0.6,
    xSpeed: 1,
    ySpeed: -2,
  },
  {
    size: 50,
    x: 0.8,
    y: 0.8,
    xSpeed: -1,
    ySpeed: -2,
  },
  {
    size: 10,
    x: 0.2,
    y: 0.2,
    xSpeed: 1,
    ySpeed: 2,
  },
  {
    size: 60,
    x: 0.4,
    y: 0.4,
    xSpeed: -1,
    ySpeed: 2,
  },
  {
    size: 35,
    x: 0.6,
    y: 0.6,
    xSpeed: 1,
    ySpeed: -2,
  },
  {
    size: 25,
    x: 0.8,
    y: 0.8,
    xSpeed: 1,
    ySpeed: 2,
  }
];





function addBalls(numberToAdd) {
  for (let i = 0; i < numberToAdd; i++) {
    //args: color, size, x, y, xSpeed, ySpeed, name;


    b = new Ball(objects[i].size, objects[i].x, objects[i].y, objects[i].xSpeed, objects[i].ySpeed);  //Add name later.
    balls.push(b);
  }
};

function removeBalls(removeElementsQuantity) {
  console.log(removeElementsQuantity);
  balls.splice(0, removeElementsQuantity);
};




function sequencing() {
  index = index % sequence.length;
  console.log(index);
  console.log(balls);

  let intervalTwo = setTimeout(() => {
    if (sequence[index] >= 0) {
      console.log(sequence[index]);
      addBalls(sequence[index]);
    } else {
      console.log(sequence[index]);
      removeBalls(sequence[index]);
    }
    index++;
    if (index < 100) {
      sequencing();
    }
  }, 1000);

}




//Create a series of functions which add or remove objects.
  //Then call these in the sequencing program.
  //Then there can be an array of objects with sequencing/timing which calls all of these in turn from the sequencing function.
  //The objets and sequencing can be determined by the color and size of the object.

  //1. Create a function which - when run adds or subtracts a certain selection of elements to the array.
        //???Should the array be an array or an array of arrays(different objects???)
  //2. Create a data structure which can hold these functions and call them with the requisite arguments.
   //------I'm not exactly sure what this looks like or how it should work.-------
        //Is the function in the object? ...Or it's a function call in an objets.
        //I think that it should be an object with key values for arguments which used to call a given function. This includes the quantity and specificiations of an item. And the timing.
        //To test this create a function which crates a given number of balls of a certain color at a certain time. See if I can get this to work in this program, with the simplest possible implementation.