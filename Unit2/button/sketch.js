let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {


  switch (state) {

    case 0:
      background("grey");
      break;




    case 1:
      background("red");

  }


  fill("purple");
  rect(100, 100, 100, 100);
}

function mouseReleased() {
  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {
    state++;
    if (state > 1) state = 0;
  }

}
