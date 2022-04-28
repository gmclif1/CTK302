let state =0;
let song2, song3,song4,song5,song6;
//var bubbles = [];
//let url = "";


function preload(){
//  song1=loadSound("assets/bounce.mp3");
  song2=loadSound("assets/needs.mp3");
  song3=loadSound("assets/oneone.mp3");
  song4=loadSound("assets/sisi.mp3");
  song5=loadSound("assets/doubledouble.mp3");
song6=loadSound("assets/eventuallyyy.mp3");
//  song1.loop();
//  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();
  song4.loop();
  song4.pause();
  song5.loop();
  song5.pause();
  song6.loop();
  song6.pause();

}


function setup() {

  //let key="1_yLPseJikrnSQ2bo6tSB5a90ScyoLUzrUEFN6HhaFDY";
  //url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

//  loadJSON(url, gotData);


   ellipseMode(CENTER);
   rectMode(CENTER);
   createCanvas(800, 800);

}


//function gotData(data) {
//  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
//  for (let i = 0; i < data.length; i++) {
//    bubbles.push(
  //    new Bubble(
  //      data[i]["Favorite Music Genre"],
  //      data[i]["Name your Current Favorite song with the  Artist Name"],
    //    data[i]["Describe the song in 3 Adjectives "])); // THESE NEED TO MATCH SPREADSHEET

//  }
//}

function draw() {
//  for (let i = 0; i < bubbles.length; i++) {
//    bubbles[i].display();

//class Bubble {
//  constructor(fav, song, adj) {
    // only the order of these parameters matters!
//    this.fav = fav;
  //  this.song = song;
  //  this.adj = adj;
//    this.pos = createVector(random(width), random(height));
  //this.vel = createVector(random(1, 1), 0);
  //}

//  display() {
  //  stroke("purple");
  //  noFill();
//    rect(this.pos.x+1, this.pos.y+1, 200, 200);
  //  textSize(10);
//text(this.fav + "\n" + this.song + "\n" + this.adj, this.pos.x,this.pos.y);
//    this.pos.add(this.vel) ;
  //  if (this.pos.x > width) this.pos.x = 0 ; {
  // }



switch (state) {

  case 0:
 //song1.play();

  case 1:
  state = 1;
  background("black");
  text("Click to Hear Songs Featured",100,100);
  textSize(30);
  fill('#FFFFFF');
  break;


  case 2:
  song2.play();
  state=3;
  break;

  case 3:
background("pink");
text("Need It - KAYTRANADA ft. Masego",100,100);
fill('#222222');
  break;

  case 4:
  song3.play();
  state =5;
  break;

  case 5:
background("#c2db6e");
  text("One More Weekend - Maude Latour",100,100);
  fill('#222222');
  break;

  case 6:
  song4.play();
  state=7
  break;

  case 7:
  background("#59b3bd");
  text("Si Veo a tu Mamá - Bad Bunny",100,100);
  fill('#222222');
  break;

  case 8:
  song5.play();
  state=9
  break;

  case 9:
background("#a11d47");
text("Seeing Double - Leah",100,100);
fill('#222222');
break;

  case 10:
  song6.play();
  state=11
  break;

  case 11:
  background("#8263c2");
  text("Eventually - Tame Impala",100,100);
  fill('#222222');
  break;
}

}

function mousePressed(){

  state++;
  if (state>11) state =0;

//  song1.stop();
  song2.stop();
  song3.stop();
  song4.stop();
  song5.stop();
  song6.stop();



}
