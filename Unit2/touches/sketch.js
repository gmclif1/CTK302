let numberOfTouches;
let chase;
let freelance;
let eyes;


function setup() {

  createCanvas(400, 400);
  chase = loadImage("assets/chase.jpg");
  freelance = loadImage("assets/freelance.jpg");
  eyes = loadImage("assets/eyes.jpeg");
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch (numberOfTouches) {
    case 0:
      text("no one is touching the screen", 5, 22);
      break;

    case 1:
      text("it's kind of lonely here", 5, 22);
      image(chase,200,200, 100, 100);
      break;

    case 2:
      text("two fingers are touching the screen", 5, 22);
      image(freelance, width / 2, 100, 100, 100);
      break;

    case 3:
      text("three are touching the screen", 5, 22);
      image(eyes, width / 2, 200, 100, 100);
      break;


  }

}
