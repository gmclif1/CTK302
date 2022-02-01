function setup() {
  createCanvas(400, 400);
  textAlign (CENTER);
}

function draw() {


  if (mouseIsPressed) {
    background('#2D936C');
    rect(width/2, height/2, 200, 100);
  } else {
    background("yellow");
    ellipse(30, 40, 72, 72);
    rect(width/2, height/2, 100, 100);
  }




  fill(240, 195, 72);





}
