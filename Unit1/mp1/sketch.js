function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
}

function draw() {


  if (mouseIsPressed) {
    background('#2D936C');
    rect(width / 2, height / 2, 200, 100);
    noStroke();


  } else {
    background("yellow");
    ellipse(170, 110, 72, 72);
    rect(width / 2.5, height / 2, 30, 200);
    rect(220,180, 10, 90, 200);
    translate (120,180);
    rotate(45);
    rect(0,0, 10, 90, 200);

    noStroke();

  }




  fill(240, 195, 72);





}
