function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
}

function draw() {


  if (mouseIsPressed) {
    background('#000000');

        fill("orange");
        rect(155,140, 30, 30);
        ellipse(170, 110, 72, 72);

        fill("blue");
        ellipse(178, 101, 10, 10);

        fill("green");
        ellipse(160, 101, 10, 10);

        ellipse(170, 122, 15, 15);

        fill("grey");
        rect(width / 3, height / 2.5, 75, 100,10);

        fill("pink");
        rect(width / 3, 250, 75, 80,10);

        fill("purple");
        rect(180,340,20, 50, 10);

        fill("green");
        rect(140,340,20, 50, 10);


        translate (120,180);
        rotate(45);
        fill ("yellow");
        rect(0,20, 10, 100, 200);

        translate (140,-110);
        rotate(90);
        fill ("orange");
        rect(0,80, 10, 100, 200);

        noStroke();


  } else {
    background("#76a6f5");

    fill("orange");
    rect(155,140, 30, 30);
    ellipse(170, 110, 72, 72);

    fill("blue");
    ellipse(178, 101, 10, 10);

    fill("green");
    ellipse(160, 101, 10, 10);

    fill("grey");
    rect(width / 3, height / 2.5, 75, 100,10);

    fill("purple");
    rect(180,328,20, 65, 10);

    fill("green");
    rect(140,328,20, 65, 10);

    fill("pink");
    rect(136, 254, 70, 90,10);

    translate (120,180);
    rotate(45);
    fill ("yellow");
    rect(0,20, 10, 100, 200);

    translate (-50,-95);
    rotate(250);
    fill ("orange");
    rect(0,80, 10, 100, 200);


    fill("pink");
    ellipse(-40, 25, -40, 50, 10, 40, 40);


    noStroke();

  }





  fill(240, 195, 72);





}
