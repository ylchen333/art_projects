

// limit colors : "fluorescentpink", "teal"
let margin = 51;
let noiseScale = 0.02;
let r = 26;
function setup() {
	createCanvas(612, 792);
	background(100);
	// let w = pixelDensity(8);
	angleMode(DEGREES);
}

function draw() {
	background(250);
	
	//pink lines in back
	push();
	stroke(254, 20, 158, 100);
	strokeWeight(0.5);
	translate(margin/2, 0);
	lineMany(width/2+margin-7, height+10, 1.5);
	stroke(0, 128, 128, 100);
	strokeWeight(0.5);
	translate(width/2-margin*2-5, 0);
	lineMany(width/2+margin-5, height+10, 1.5);
	// filter(BLUR);
	pop();
	
	push();
	translate(margin, margin);
	for(let x = 0; x <= 512; x +=(2*r)){
		for(let y = 0; y <= 742; y +=(2*r)){
			fill(255, 255, 255);
			noStroke();
			star(x,y);
			
		}
	}	
	pop();
	
	push();
	translate(50, 50);
	for(let x = 0; x <= 512; x +=(2*r)){
		for(let y = 0; y < 692; y +=(2*r)){
			let a = noise(noiseScale*x, noiseScale*y);
		
			fill(0, 128, 128, a*255);
			noStroke();
			push();
			if(a < 0.27){
				// translate(5, 5);
				drawSplot();
				fill(254, 20, 158, 100*a);
			}
			translate(x, y);
			drawSplot();
			
			//draw stars
			if((x%3==0&&y%3==0) || (x%3==1&&y%3==1)) {
				fill(254, 20, 158, a*555);
				if(y <692 && x<482){
					if(a < 0.3) {
						stroke(254, 20, 158, 222-a);
						strokeWeight(1.6);
						// if(a %0.02==0) {
						// 	noFill();
						// }
					}
					star(r,r);
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
	
	
	
	noLoop();
}

				
function drawSplot() {
	angleMode(DEGREES);	
	noStroke();
	push();
	beginShape();
	for (let i = 0; i < 360; i += 5) {
		let vari = randomGaussian(0, r/66);
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
	vertex(x-22, y);
	vertex(x-22, y);
	curveVertex(x-5, y-10);				
	vertex(x, y-29);
	vertex(x, y-29);
	curveVertex(5+x, y-10);				
	vertex(x+22, y);
	vertex(x+22, y);
	curveVertex(5+x, y+10);
	vertex(x, 29 +y);
	vertex(x, 29 +y);
	curveVertex(x-5, y+10);
	vertex(x-22, y);
	vertex(x-22, y);
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