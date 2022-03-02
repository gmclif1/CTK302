let x = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  push();
  translate(x, 0);
  avatar();
  x += 5;
  pop();
  if (x > width){
  x=-400;
  }
  //push and pop isolates it
  //cant have a space between the +=
}


  function setup() {
    createCanvas(400, 400);
    textAlign(CENTER);
  }


  function avatar() {

        noStroke();


        if (mouseIsPressed) {
          background('#000000');

          fill("#6e4e1a");
        ellipse(170, 120, 95, 100);


              fill("#ebb26c");
              rect(155,140, 30, 30);
              ellipse(170, 110, 65, 72);

              fill("#4a433b");
      ellipse(178, 101, 7, 10);

              fill("#4a433b");
              ellipse(160, 101, 7, 10);

              fill("grey");
              rect(width / 3, height / 2.5, 75, 110,20);

              fill("grey");
      rect(190,280,4,180);

              fill("grey");
              rect(150,280,4, 180);


          //    fill("grey");
          //   rect(136, 254, 70, 90,10);


              fill("#c27e91");
              ellipse(169, 130, 25, 15, 100, 100);

              fill("#4a433b");
              ellipse(169, 114, 9, 2, 9, 9);


              translate (120,180);
              rotate(45);
              fill ("grey");
              rect(10,20,4, 100);

              translate (140,-110);
              rotate(90);
              fill ("grey");
              rect(0,80,4, 150);

              noStroke();


        } else {
          background("#76a6f5");


          fill("#6e4e1a");
        ellipse(170, 120, 85, 100);


          fill("#ebb26c");
          rect(155,140, 30, 30);
          ellipse(170, 110, 65, 72);

          fill("#4a433b");
          ellipse(178, 101, 5, 7);

          fill("#4a433b");
          ellipse(160, 101, 5, 7);

          fill("#1b8756");
          rect(width / 3, height / 2.5, 75, 110,20);

          fill("#ebb26c");
          rect(178,328,20, 65, 10);

          fill("#ebb26c");
          rect(145,328,20, 65, 10);


          fill("#2a315c");
          rect(136, 254, 70, 90,10);


          fill("#c27e91");
          ellipse(169, 125, 25, 4, 100, 100);

      fill("#4a433b");
          ellipse(169, 114, 9, 2, 9, 9);



          translate (120,180);
          rotate(45);
          fill ("#ebb26c");
          rect(-8,-32, 10, 100, 250);

          translate (-50,-95);
          rotate(250);
          fill ("#ebb26c");
          rect(-5,79, 10, 100, 200);




          noStroke();

        }




        fill(240, 195, 72);





      }
