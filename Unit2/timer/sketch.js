let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}


function draw() {
  // timer++;
  // if (timer > 2 * 60) {
  //   timer = 0;
  //   myState++;
  //   if (myState > 1) {
  //     myState = 0;
  //   }
  // }


  switch (state) {

    case 0:
      background("yellow");
      text("0", 100, 100);
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 1;
      }

      break;


    case 1:
      background("purple");
      text("1", 100, 100);
      timer++;
      if (timer > 5 * 60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
      background("blue");
      //timer code
      text("2", 100, 100);
      timer++;
      if (timer > 1 * 60) {
        timer = 0;
        state = 3;
      }
      break;


    case 3:
      background("grey");
      //timer code
      text("3", 100, 100);
      timer++;
      if (timer > 2 * 60) {
        timer = 0;
        state = 4;
      }
      break;


    case 4:
      background("purple");
      //timer code
      text("4", 100, 100);
      timer++;
      if (timer > 50 * 60) {
        timer = 0;
        state = 5;
      }
      break;



  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;
}
