let r;
let x = 0;



function setup() {
  createCanvas(500, 500);
//  r = loadFont("r.ttf");
  //  r = loadFont("assets/Roboto-Bold.ttf");
//r = loadFont("assets/Muro.otf");
  r = loadFont("assets/Muro.otf");
}





function draw() {

  background("black");
  fill(250, 20, 20);
   textFont("Georgia");
  textFont(r);
  textSize(48);
  text("text", x, 200);


  x = x + 2;
  if (x > width) {
    x = 0;
  }
}
