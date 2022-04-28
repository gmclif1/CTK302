var bubbles = [];
let url = "";


function setup() {
//  let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet
//let key ="1yoUufAQiGxaliwKitj1KLzvZoUC2KJKOlfWS9imjPK8";
let key="1_yLPseJikrnSQ2bo6tSB5a90ScyoLUzrUEFN6HhaFDY";
  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(800, 800);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["Favorite Music Genre"],
        data[i]["Name your Current Favorite song with the  Artist Name"],
        data[i]["Describe the song in 3 Adjectives "])); // THESE NEED TO MATCH SPREADSHEET

  }
}

function draw() {
  background("black");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(fav, song, adj) {
    // only the order of these parameters matters!
    this.fav = fav;
    this.song = song;
    this.adj = adj;
    this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(1, 1), 0);
  }

  display() {
    stroke("purple");
    noFill();
    rect(this.pos.x+1, this.pos.y+1, 200, 200);
    textSize(10);
text(this.fav + "\n" + this.song + "\n" + this.adj, this.pos.x,this.pos.y);
    this.pos.add(this.vel) ;
    if (this.pos.x > width) this.pos.x = 0 ;

  }


}
