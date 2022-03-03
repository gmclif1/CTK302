//for this one you need to just fix the color. that is is


let state = 1;
let timer = 0;
let x=0;
let velor=0;
function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {

  background(100);
  background ("white");
  fill("black");
  rect(width/2,height/2, 200,600);
  timer++ ;
  if (timer>3*60){
    timer = 0;
    state++;
    if (state>2) {
    state=0;
    }
 }

  fill("blue");
  rect(x,height-50,100,50);
  x = x+velor;
  if (x>width){
    x = 0;
  }

  switch (state) {

    case 0://red light


    velor = 10;
      fill("red");
    ellipse(width/2, height/2 -170,150,150);
      fill("grey");
     ellipse(width/2, height/2, 150,150);

    fill("grey");
    ellipse(width/2, height/2 +170,150,150);

        //text("0", 100, 100);
      break;

    case 1: //green light



      velor = 10;
        fill("grey");
      ellipse(width/2, height/2 -170,150,150);
        fill("grey");
       ellipse(width/2, height/2, 150,150);

      fill("green");
      ellipse(width/2, height/2 +170,150,150);


       // text("1", 100, 100);
      break;

    case 2: //yellow light

    velor = 10;
      fill("grey");
    ellipse(width/2, height/2 -170,150,150);
      fill("yellow");
     ellipse(width/2, height/2, 150,150);

    fill("grey");
    ellipse(width/2, height/2 +170,150,150);


     // text("2", 100, 100);
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
