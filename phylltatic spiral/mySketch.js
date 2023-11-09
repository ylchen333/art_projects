// palette: https://pin.it/3a2c5mm
// parastichy: (21,34)


let c = 0.1;
function setup() {
	createCanvas(640, 640);
	background(100);
}

function draw() {
	colorMode(HSB, 300);
	background(290, 85, 66);
	angleMode(DEGREES); 
	blendMode(DODGE);
	
	push();
	translate(width/2, height/2);
	// text("phylltatic spiral", 300, 300);
	for (let i = 0; i <600; i ++) {
	
		let r = c * sqrt(i);
		let a = i * 137.5;
		let x = r * cos(a);
		let y = r * sin(a);
		if (i%3 ==0) {
			c +=0.1;
		}
		noStroke();
		fill(a%50 +235, a%230, a%250);
		circle(x, y, c*4.5);
		
	}
	pop();
	
	noLoop();
}

