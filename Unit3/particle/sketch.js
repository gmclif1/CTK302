let cars=[];

function setup() {
  createCanvas(500,500);
//for (let i=0; i<20; i++){
//cars.push(new Car());
noStroke();

  // Spawn one object
 // myCar = new Car();

}

function draw() {
  background('grey');
  cars.push(new Car());

for (let i=0; i< cars.length; i++) {
  cars[i].display();
  cars[i].move();
  if (cars[i].a<=0) {
    cars.slice(i, 1);
  }

}
}


class Car {

constructor() {
this.pos = createVector(100,100) ;
this.vel=createVector(random(10),random(10));
this.r = random(255);
this.g = random(255);
this.b = random(255);
this.a = random(255);
//this.s = random(5,20);
    // initialize your attributes here

  }

  // methods

display() {
fill(this.r, this.g, this.b, this.a);
//ellipse(this.pos.x,this.pos.y,this.s);
text("flow",this.pos.x,this.pos.y);
textSize (20);
 }


move() {
  this.pos.add(this.vel);
  this.a=this.a - 5;
}
}

  // if(this.pos.x>width) this.pos.x=0;
  // if(this.pos.x<0) this pos.x =width;
  // if(this.pos.y>height) this.pos.y=0;
  // if(this.pos.y<0)this.pos.y=height;
