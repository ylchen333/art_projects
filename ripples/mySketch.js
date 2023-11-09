// ripple inspo https://pin.it/5hXxuj8
let rips = [];

// ripple class
class ripple {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = random(9, 30);
    this.speed = 3;
		this.rings = random(1, 4);
  }

  move() {
    this.diameter += this.speed;
    // this.y += random(-this.speed, this.speed);
  }

  display() {
		noFill();
		strokeWeight(6);
		stroke(176, 191, 202);
		for(let j=1; j<+this.rings;j ++) {
			if(this.speed*j >1.5){
				stroke(255, 191, 222, 2222/(this.diameter/j));
				this.speed -= 0.001;
				ellipse(this.x, this.y, this.diameter/j, this.diameter/j);
			}
		} 
  }
}

function setup() {
	createCanvas(600, 600);
	background(100);
}

function draw() {
	background(27, 44, 69);
	
	for (let i = 0; i < rips.length; i++) {
		push();
		blendMode(SCREEN);
    rips[i].move();
    rips[i].display();
		pop();
  }
	
	if(rips.length > 20) {
		rips.shift();
	}
}

function mousePressed() {
	rips.push(new ripple(mouseX, mouseY));
}
