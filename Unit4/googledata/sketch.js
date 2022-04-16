var bubbles = [];
let url = "";

function setup() {
//  let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet
//let key ="1yoUufAQiGxaliwKitj1KLzvZoUC2KJKOlfWS9imjPK8";
let key="1mL74O7b_Lz4Rc4RSk-AJ_orIzJVvyZYMKSVW2DVpxm8";
  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
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
        data[i]["morning or night"],
        data[i]["energy level for today"],
        data[i]["summer or winter"],
        data[i]["pineapple on pizza"],
        data[i]["hot or iced coffee"])); // THESE NEED TO MATCH SPREADSHEET

  }
}

function draw() {
  background("blue");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(day, energy, season, food, coffee) {
    // only the order of these parameters matters!
    this.day = day;
    this.energy = energy;
    this.season = season;
    this.food = food;
    this.coffee = coffee;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("red");
    noFill();
    ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("white");
    text(
      this.day + "\n" + this.energy + "\n" + this.season + "\n" + this.food, + "\n" + this.coffee,
      this.pos.x,
      this.pos.y
    );

    this.pos.add(this.vel) ;
    if (this.pos.x > width) this.pos.x = 0 ;

  }


}
