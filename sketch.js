let x = 0;
let y = 0;

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(0);
  //colorMode(HSB);
  //colorMode(HSB, 500);
}


function draw() {

  for (var i = 0; i < 2500; i++) {    //draw speed is 2500

    drawPoint();
    nextPoint();
  }
}


function nextPoint() {

  var nextX;
  var nextY;

  var random = Math.random();

  if (random < 0.1) {

    nextX = 0;
    nextY = 0.16 * y;
  }else if (random < 0.86) {

    nextX = 0.85 * x + 0.04 * y;
    nextY = -0.04 * x + 0.85 * y + 1.6;
  }else if (random < 0.93) {

    nextX = 0.20 * x + -0.26 * y;
    nextY = 0.23 * x + 0.22 * y + 1.6;
  }else {

    nextX = -0.15 * x + 0.28 * y;
    nextY = 0.26 * x + 0.24 * y + 0.44;
  }

  x = nextX;
  y = nextY;
}

function drawPoint() {

  stroke(255, 220, 255);
  strokeWeight(0.5); // dot size

  var px = map(x, -2.1820, 2.6558, 0, width);
  var py = map(y, 0, 9.9983, height, 0);

  point(px, py);
}
