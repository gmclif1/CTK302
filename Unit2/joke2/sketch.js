let myState = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {

  timer++;
  if (timer > 2*60){
    timer = 0;
    myState++;
    if (myState>1){
      myState = 0;
    }
  }

  switch (myState) {

    case 0:
      background ("grey");
      text("Why does Waldo wear a striped shirt? ", 100, 100);
        break;



    case 1:
      background ("red");
      text("Because he doesn’t want to be spotted.", 100, 100);

      }
    }
