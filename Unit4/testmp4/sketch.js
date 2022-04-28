
let song;

function setup() {
  song = loadSound('assets/music/needtest.mp4');
  createCanvas(720, 200);
  rect(30, 20, 55, 55);
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}


function draw() {

}
