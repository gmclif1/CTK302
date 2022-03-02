let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {


  switch (state) {

    case 0:
      background ("grey");
      text("Why does Waldo wear a striped shirt? ", 100, 100);
        break;



    case 1:
      background ("red");
      text("Because he doesn’t want to be spotted.", 100, 100);

      }
    }


    function mouseReleased() {
      state++;
      if (state > 1) state = 0;

    }
