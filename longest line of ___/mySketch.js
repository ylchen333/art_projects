// longest line segment
// palette: https://pin.it/5KckNlY


let l = []; // store points
let clr = [];
let best; // longest length
let bestI = 0; // index of best length holder
let newX = 0;
let newY = 0;


function setup() {
	createCanvas(600, 600);
	background(222, 195, 121);
	clr = [color(233, 124, 136), color(142, 146, 199)];
	best = -10;
}

// points class
class lines {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
		this.x2 = x2;
    this.y2 = y2;
		this.str = this.longest ? 11 : 5;
		this.clr = this.longest ? clr[0]: clr[1]
		// this.speed = random(1, 3);
		this.d = distance(this.x1, this.y1, this.x2, this.y2)
		this.longest = false;
  }
	change() {
		// print("longest is "+this.longest);
		this.str = this.longest ? 11 : 5;
		this.clr = this.longest ? clr[0]: clr[1]
	}
	display() {
		push();
		stroke(this.clr)
		strokeWeight(this.str);
		line(this.x1, this.y1, this.x2, this.y2);
		pop();
	}
}



function draw() {
	background(244, 214, 140);
	
	bestLine();
	if (newX > 0 && newY > 0) {
		if(distance(newX, newY, mouseX, mouseY) > best) {
			stroke(clr[0]);
			strokeWeight(11);
			allNot();
			// best = distance(newX, newY, mouseX, mouseY);
			line(newX, newY, mouseX, mouseY);
		} else {
			stroke(clr[1]);
			strokeWeight(5);
			l[bestI].longest = true;
			line(newX, newY, mouseX, mouseY);
		}
		
	}
	
	
	
	for (let i=0; i<l.length; i++) {
		// l[i].move();
		l[i].display();
	}
}

function mousePressed() {
	newX = mouseX;
	newY = mouseY;
	// line(newX, newY, mouseX, mouseY);
	// print("newx and newY are "+newX+", "+newY);
}

function mouseReleased() {
	
	l.push(new lines(newX, newY, mouseX, mouseY))
	// print("new length "+l[l.length-1].d);
	bestLine();
	newX = -10;
	newY = -10;
}

function bestLine() {
	for (let i=0; i<l.length; i++) {
		l[i].change();
		if (l[i].d > best) {
			// print("line "+i+" is the longest");
			l[bestI].longest = false;
			l[i].longest = true;
			bestI = i;
			best = l[i].d;
			l[bestI].change();
			// return;
		}
		
	}
}
function allNot() {
	for (let i=0; i<l.length; i++) {
		l[i].longest = false;
		l[i].change();
		
	}
}



function distance(x1, y1, x2, y2) {
	return sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1))
}

function keyPressed() {
	noLoop();
	// l = [];
	
}