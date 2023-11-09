// these things: https://pin.it/1wQdO5y

let linePoints = []; // store location of 100 most recent (x, y) points

// points class
class points {
  constructor(x, y) {
    this.x = x;
    this.y = y;
		this.str = 4;
		this.speed = random(1, 3);
  }
  move() {
    this.x += random(-this.speed, this.speed);
		this.y += random(-this.speed, this.speed);
		this.str += random(-this.speed, this.speed)/5;
    // this.y += random(-this.speed, this.speed);
  }
	display() {
		strokeWeight(this.str);
		curveVertex(this.x, this.y);
	}
}

function setup() {
	createCanvas(600, 600);
	background(100);
}

function draw() {
	background(92, 25, 56);
	
	noFill();
	push();
	blendMode(OVERLAY);
	strokeWeight(5);
	stroke(252, 15, 191);
	beginShape();
	for (let i=0; i<linePoints.length; i++) {
		linePoints[i].move();
		linePoints[i].display();
	}
	endShape();
	pop();
	
}

function mouseMoved() {
	// l.pop(0);
	linePoints.push(new points(mouseX, mouseY));
	if (linePoints.length > 100) {
		linePoints.shift();
	}
}