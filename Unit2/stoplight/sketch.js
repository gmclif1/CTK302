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
  fill("yellow");
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


      fill("red");
      velor =0;
      ellipse(width/2, height/2 -170,150,150);
       ellipse(width/2, height/2, 150,150);
      fill("gray");
      ellipse(width/2, height/2 +170,150,150);
      fill("gray");


        //text("0", 100, 100);
      break;

    case 1: //green light


          fill("yellow");
      velor = 10;
      ellipse(width/2, height/2 -170,150,150);
       ellipse(width/2, height/2, 150,150);
      fill("gray");
      ellipse(width/2, height/2 +170,150,150);
      fill("green");

       // text("1", 100, 100);
      break;

    case 2: //yellow light

      fill("green");
      velor = 20;
      ellipse(width/2, height/2 -170,150,150);
       ellipse(width/2, height/2, 150,150);
      fill("yellow");
      ellipse(width/2, height/2 +170,150,150);
      fill("gray");


     // text("2", 100, 100);
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
