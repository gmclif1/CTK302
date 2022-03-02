let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background ("yellow");
      text("0", 100, 100);
      for (let j =0; j<100; j++){
      for (let i =0; i< 100; i++) {
      rect(i*20,j*20,10,10);
      }
    }
      break;

    case 1:
      background ("red");
      text("1", 100, 100);
      for (let j =0; j<200; j++){
      for (let i =0; i< 50; i++) {
      ellipse(i*20,j*20,10,10);
      }
    }
      break;

    case 2:
      background ("blue");
      text("2", 100, 100);
      for (let j =0; j<200; j++){
      for (let i =0; i< 50; i++) {
      ellipse(i*11,j*11,17,10);
      }
    }
      break;

      case 3:
        background ("grey");
        text("3", 100, 100);
        for (let j =0; j<200; j++){
        for (let i =0; i< 50; i++) {
        rect(i*30,j*30,27,27);
      }
    }
        break;

        case 4:
          background ("purple");
          text("4", 100, 100);
          for (let j =0; j<200; j++){
          for (let i =0; i< 50; i++) {
          ellipse(i*30,j*30,9,27);
        }
      }
          break;

  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;

}
