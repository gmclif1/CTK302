let state =0;
let song1, song2, song3;



function setup() {
  createCanvas(500, 500);
  funtion preload(){
    song1=loadSound("assets/bounce.mp3");
    song2=loadSound("assets/her.mp3");
    song3=loadSound("assets/nola.mp3");

  }

}

function draw() {
switch (state) {
  case 0:
  song1.play();
  state = 1;
  break;

  case 1:
  background("red");
  break;

  case 2:
  song2.play();
  state=3;
  break;

  case 3:
  background("blue");
  break;

  case 4:
  song3.play();
  state =5;
  break;

  case 5:
  break;
}

}

function mouseRelased(){
  state++;
  if (state>5){
    state =0;
  }
}
