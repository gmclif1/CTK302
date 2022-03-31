let cars = [];
let frogPos;
let state = 0;
let timer = 0;
let misto;
let bg;
let bird;
let song;


//  function preload(){
    // song = loadSound("song/heal.mp4");

// }


function setup() {
  createCanvas(windowWidth, windowHeight);



  // Spawn one object
  // myCar = new Car();

  for (let i = 0; i < 4; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 100);
  //  image = loadImage("images/bird.png");


  bg = loadImage("images/background.png");



  misto = loadFont("misto/Misto.otf");

    bird = loadImage("images/bird.png");


}




function draw() {

  switch (state) {
    case 0: // menu screen
       background("black") ;
      // createCanvas(1000, 1000);

//  image(birdd, 400, 400, (500, 500));
      image(bg, 0, 0, width, height);
     textFont(Misto);
    textSize(50);
      text("Pop the Blimp",550, 400);
  //      song.play();




//      fill("black");


//  image(bird, 00,0,width,height);





      break;

    case 1: // game play
      game();
      timer++;
      if (timer > 7 * 60) {
        timer = 0;
        state = 3;

      }
      break;

    case 2: // win screen

      image(bg, 0, 0, -5, -10);
      text("you won!", 550, 400);
      fill("black");



      break;

    case 3: // lose screen
      image(bg, 0,0,width, height);
      text("you lost!", 550, 400);
      fill("black");

      break;

  }

}




function game() {
    image(bg, 0, 0, width, height);

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    state = 2;
  }
  fill("#ff8a14");
  ellipse(frogPos.x, frogPos.y + -38, 2, 20); //beak
  fill("#ffffff");
  ellipse(frogPos.x, frogPos.y, 30, 70); //body
  fill("#ffffff");
  ellipse(frogPos.x, frogPos.y, 90, 15); //wing
  fill("#000000");
  ellipse(frogPos.x + -4, frogPos.y + -27, 3, 7); //left eye
  fill("#000000");
  ellipse(frogPos.x + 4, frogPos.y + -27, 3, 7); //right eye



  checkForKeys();
}


class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(height)); // initialize your attributes here
    this.v = createVector(random(3), 0);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(255);
    this.size = random(48, 128);
  }
  // methods

  display() {
    fill(this.r, this.g, this.b, this.o);

    // make an actual car
    rect(this.pos.x + 100, this.pos.y + 44, 20, 7);
    rect(this.pos.x + 80, this.pos.y + 27, 30, 5);
    //  quad(this.pos.x +38,this.pos.y+31, 86, 20, 69, 63, 30, 76);
    noStroke();
    //   ellipse(this.pos.x +60, this.pos.y + 20, 20, 20);
    //   ellipse(this.pos.x + 60, this.pos.y + 40, 20, 20, 20);
    //   ellipse(this.pos.x + 50, this.pos.y + 27, 20, 20, 20);
    //  ellipse(this.pos.x + 50, this.pos.y + 20, 20, 20, 20);
    //ellipse(this.pos.x + 60, this.pos.y + 45, 20, 20, 20);

    ellipse(this.pos.x + 100, this.pos.y + 30, 100, 30);



    // textSize(this.size) ;
    // text("BOOM", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.v);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: // win state
      state = 0;
      break;

    case 3: // lose state
      state = 0;
      break;

  }
}
