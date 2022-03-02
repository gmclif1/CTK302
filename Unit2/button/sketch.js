let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {


  switch (state) {

    case 0:
      background("grey");
      text("Why does Waldo wear a striped shirt? ", 100, 100);
      break;




    case 1:
      background("red");
      text("Because he doesn’t want to be spotted.", 100, 100);

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
