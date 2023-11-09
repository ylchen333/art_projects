

// limit colors : "fluorescentpink", "teal"
let margin = 51;
let noiseScale = 0.02;
let r = 25;
function setup() {
	createCanvas(612, 792);
	background(100);
	angleMode(DEGREES);
}

function draw() {
	background(250);
	
	// push();
	// for(let i = 0; i < 20; i ++){
	// 	let noiseVal = noise(i*noiseScale);
	// 	translate(random(i*30), random(i*55));
	// 	fill(254, 20, 158);
	// 	noStroke();
	// 	star(-80, 80);
	// 	star(80, -80);
	// }
	// pop();
	
	//pink lines in back
	push();
	stroke(254, 20, 158, 188);
	strokeWeight(0.3);
	translate(margin*4-30, 0);
	lineMany(width/2, height, 1.5);
	pop();
	
	push();
	translate(50, 50);
	for(let x = 0; x <= 512; x +=(2*r)){
		for(let y = 0; y <= 742; y +=(2*r)){
			let a = noise(noiseScale*x, noiseScale*y);
		
			fill(0, 128, 128, a*222);
			noStroke();
			push();
			// print("x, y is " + x +", " +y);
			translate(x, y);
			drawSplot();
			if(a < 0.5) {
				fill(254, 20, 158, a*555);
				if(y <692 && x<482){
					star(-r*2, -r*2);
				}
			}
			pop();
		}
	}
	pop();
	
	// horizontal lines
	push();
	stroke(254, 20, 158);
	strokeWeight(0.3);
	
	translate(width-51, -width/2);
	rotate(90);
	lineMany(width/3, height, 2);
	pop();
	

	
	// draw margins
	fill("white");
	// noStroke();
	// rect(0, 0, width, margin+27);
	// rect(0, 0, margin-27, height);
	// rect(0, height-margin, width, margin);
	// rect(width-margin, 0, margin, height);
	
	fill(0, 128, 128, 200);
	// push();
	// translate(margin, margin);
	// drawSplot();
	// pop();
	// push();
	// translate(width-margin, margin);
	// drawSplot();
	// pop();
	// push();
	// translate(margin, height-margin);
	// drawSplot();
	// pop();
	// push();
	// translate(width-margin, height-margin);
	// drawSplot();
	// pop();
	
	noLoop();
}

				
function drawSplot() {
	angleMode(DEGREES);	
	noStroke();
	push();
	beginShape();
	for (let i = 0; i < 360; i += 5) {
		let vari = randomGaussian(-r/88, r/88);
		let x = (r + vari)*cos(i);
		let y  = (r + vari)*sin(i);
		curveVertex(x, y);
	}
	endShape();
	pop();
}

// function randShi() {
// 	for (e = 0; e < 100; e += 0.5) {
		
// 	}
// }

function star(x, y) {
	
	push();
	beginShape();
	vertex(55+ x, 80 +y);
	vertex(55+ x, 80 +y);
	curveVertex(70+ x, 75 +y);				
	vertex(80+ x, 55 +y);
	vertex(80+ x, 55 +y);
	curveVertex(90+ x, 75 +y);				
	vertex(105+ x, 80 +y);
	vertex(105+ x, 80 +y);
	curveVertex(90+ x, 85 +y);
	vertex(80+ x, 105 +y);
	vertex(80+ x, 105 +y);
	curveVertex(70+x, 85 +y);
	vertex(55+ x, 80 +y);
	vertex(55+ x, 80 +y);
	endShape();
	pop();
}


function lineMany(w, h, d){
	for (let i = 0; i < w; i +=d){
		line(i, 26, i, h-26);
	}
}

function mousePressed() {
	noLoop();
}