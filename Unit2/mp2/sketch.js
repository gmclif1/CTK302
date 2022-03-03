let myState = 0;
let myTimer = 0;
let font;
//var x = 0;
//let mic;
//let y = 337;
//var vol = 0;
//var bk;
//var gam


//function preload() {
  //city = loadImage('asset/ola.jpg');
  //gam = loadSound('asset/gamer.mp3')
//}

function setup() {
  createCanvas(700, 400);
  font = loadFont('asset/Shirkhand-Regular.ttf');
}

//  mic = new p5.AudioIn();
//textFont(font); // SETS the font
  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
//  mic.start();

//}

function draw() {
  fill("black");
  rect(100, 100, 100, 100);

  textFont(Shirkhand, 92);
  textSize(48);
  background(100);
}

  //image(city, 0, 0);


  switch (myState) {

    case 0:
      //background("#ffcb08");
      //image(city, 0, 0);
      fill("red");
      textSize(20);

    //  text("Enter", x, 200);
    //  x += 3;
  //    if (x > 700) {
  //      x = 0;
      }


      break;

    case 1:
//planets moving
fill("black");
text("Moving Planets", 100, 100);

      myTimer++;
      if (myTimer >= 10) {
        myTimer = 4;
        myState = 2;

      }

      break;

    case 2:
      //background(100);
      //image(city, 0, 0);
    //  vol = mic.getLevel();
    //  if (vol >= 0.2) {

      //  myState = 3;
    //    gam.play();
  //    }
  //    image(bk, 312, 270);
      textSize(40);
      text("Don't Yell", 150, 200);

      break;


    case 3:
    fill("blue");
      textSize(79);
      text("GoodBye", 244, 171);

      break;

}


function mouseReleased() {
  myState++;
  if (myState > 1) state = 0;

}

  if (myState == 4) {
    myState = 0;
  }
//  console.log(mouseX + "," + mouseY);
//}
//function touchStarted() {
//  getAudioContext().resume();
//}
