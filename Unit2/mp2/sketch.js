let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
}


function draw() {




  switch (state) {

    case 0:
      background("grey");
      fill("#F69836");
      rect(120, 130, 100, 50);
      fill("black");


      textSize(12);
      text("ENTER SPACE", 168, 160);
      textAlign(CENTER);

      break;




    case 1:
    //space
      background("black");
      fill("#7F95F5");
      ellipse(155,140, 60, 60);
      fill("blue")
      ellipse(155,140, 100, 20);


    //pink
      fill("#EF7FF5");
      ellipse(255,240, 100, 100);


      //dark red
      fill("#922400");
      ellipse(290,45, 40, 40);

      //red
        fill("#D61F00");
        ellipse(295,40, 10, 10);

        //red
          fill("#D61F00");
          ellipse(290,55, 10, 10);

          //red
            fill("#D61F00");
            ellipse(280,35, 5, 5);


      translate (100,100);
      rotate(45);
      fill("yellow");
      rect(155,160,15,15);

      translate (-20,-100);
      rotate(270);
      fill("yellow");
      rect(10,160,5,5);

      translate (-5,-120);
      rotate(270);
      fill("yellow");
      rect(10,160,5,5);




        noStroke();





      timer++;
      if (timer >= 200) {
        timer = 4;
        state = 2;

      }


      break;


    case 2:
    //pattern
    background("white");
    fill("black");
    for (let j =0; j<200; j++){
    for (let i =0; i< 50; i++) {
    ellipse(i*11,j*11,17,10);
    }
  }
    break;

}
}

function mouseReleased() {
  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {
    state++;
    if (state > 1) state = 0;
  }


}
