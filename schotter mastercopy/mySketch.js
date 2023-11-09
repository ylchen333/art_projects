
let a;
let offset;
// let offsety;

function setup() {
	createCanvas(680, 1000);
	background(color(218, 216, 210));
}


function mousePressed() {
  loop();
}

function draw() {
	background(color(218, 216, 210));
	rectMode(CENTER);
	angleMode(DEGREES);
	noFill();
	
	//draw shi
	for(let i = 0; i < 12; i ++){
		for(let j = 0; j < 22; j ++){
			// calc how random it should be
			// angle want either no rotation or lots
			a = map(j, 0, 66, 0, 90);
			// offset same
			offset = map(j, 0, 22, 0, 35);
			
			push();
			translate(140+35*i, 110+35*j);
			
			rotate(random(-a, a));
			// wanna make it move in diff directions
			rect(random(-offset,offset), random(-offset,offset), 35, 35);
			pop();
		}
	}
	
	
	noLoop();
}