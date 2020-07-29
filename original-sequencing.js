function sequencing() {
  let intervalOne = setInterval(() => {


    if (more) {
      let addBalls = random(3, 13);
      for (let x = 0; x < addBalls; x++) {
        b = new Ball();
        balls.push(b);
      };
      if (balls.length >= 60) more = false;
    } else {
      let subtractBalls = random(3, 9);
      if (balls.length <= 11) {
        subtractBalls = balls.length - 1;
      }
      balls.splice(0, subtractBalls);
      if (balls.length <= 1) more = true;
    };

    if (balls.length <= 1) {
      clearInterval(intervalOne);
      setTimeout(() => {
        sequencing();
      }, 4000);
    };

  }, 1500);
};

