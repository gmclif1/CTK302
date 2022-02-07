let freelance;
let face;
let paper;


function setup() {
  createCanvas(1000, 1000);
   rectMode(CENTER);
  face = loadImage("assets/face.png");
 freelance= loadImage("assets/freelance.jpg");
 paper= loadImage("assets/paper.jpg");

}

function draw() {
  image(freelance, width / 2, 100, 100, 100);
  image(face, width / 2, 200, 100, 100);
    image(paper, width / 2, 300, 100, 100);
}
