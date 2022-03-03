let Muroslant, Roboto;

function setup() {
  createCanvas(500, 500);
  Muroslant= loadFont("assets/muro/Muroslant.otf");
  Roboto= loadFont("assets/roboto/RobotoBlack.tff");
}

function draw() {
  textFont(Muroslant, 92);
  textSize(48);
  background(100);
  text("text text", 100, 200);

textFont(Roboto, 10);
textSize(20);
text("how are you", 200,400);


}
