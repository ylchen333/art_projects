// iterative patterns i dont like it....
// tartan
let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
let c7;
let bkgdC;
let numSq;
let from ;
let to;
// let palette = [color(153, 87, 67), color(230, 149, 124), color(255, 204, 188), color(52, 153, 126), color(172, 230, 214)];
	

let change = false;

function setup() {
	colorMode(HSL);
	angleMode(DEGREES);
	createCanvas(600, 600);
	initEvery();
	background(bkgdC);
}

function initEvery() {
	// palette = [color(153, 87, 67), color(230, 149, 124), color(255, 204, 188), color(52, 153, 126), color(172, 230, 214)];
	let h = random(0, 360);
	let s = random(50, 90);
	let l = random(30, 70);
	bkgdC = color(h, s, l);
	
	numSq = random(10, 30);
	
	from = bkgdC;
	h = hue(bkgdC) + random(-30, 30);
	s = saturation(bkgdC) + random(-10, 10);
	l = lightness(bkgdC); //+ random(-10, 10);
	c1 = color(h, s, l);
	// c1 = lerpColor(from, to, random(0.1, 1));
	
	from = c1;
	h = hue(c1) + random(-30, 30);
	s = saturation(c1) + random(-10, 10);
	l = lightness(c1) + random(-10, 10);
	c2 = color(h, s, l);
	// c2 = lerpColor(from, to, random(0.1, 1));
	
	from = c2;
	h = hue(c2) + random(-30, 30);
	s = saturation(c2) + random(-10, 10);
	l = lightness(bkgdC) + random(0, 40);
	c3 = color(h, s, l);
	// c3 = lerpColor(from, to, random(0.1, 1));
	
	from = c3;
	h = hue(c3) + random(-30, 30);
	s = saturation(c3) + random(-10, 10);
	l = lightness(c3) + random(0, 20);
	c4 = color(h, s, l);
	// c4 = lerpColor(from, to, random(0.1, 1));
	
	from = c4;
	h = hue(c4) + random(-30, 30);
	s = saturation(c4) + random(-10, 10);
	l = lightness(c4) + random(-10, 10);
	c5 = color(h, s, l);
	// c5 = lerpColor(from, to, random(0.1, 1));
	
	from = c5;
	h = hue(c5) + random(-30, 30);
	s = saturation(c5) + random(-10, 10);
	l = lightness(c5) + random(-10, 10);
	c6 = color(h, s, l);
	// c6 = lerpColor(from, to, random(0.1, 1));
	
	h = hue(bkgdC) + random(-10, 10);
	s = saturation(bkgdC) + random(-10, 10);
	l = lightness(bkgdC) + random(-10, 10);
	c7 = color(h, s, l);
	
	// squareC = squareC;
}



function draw() {
	background(bkgdC);
	drawWavies(600);
	drawWavies(330);
	push();
	blendMode(MULTIPLY);
	fill(bkgdC);
	rect(0, 0, 600, 600);
	pop();
	
	drawWavies(550);
	push();
	blendMode(OVERLAY);
	fill(c7);
	
	rect(0, 0, 600, 600);
	pop();
	
	drawSquares();
	drawlines();
	
	drawRect();
	
	drawmorerects();
	drawWavies(20);
	drawCircles();
	drawWavies(10);
	noLoop();
}

function keyPressed() {
	change = !change;
  if (change) {
    initEvery();
		loop();
		change = false;
  } else {
    noLoop();
  }
}

function drawlines() {
	push();
	noFill();
	
	stroke(c1);
	for (let i = 0; i < 500; i++){
		
		h = hue(c1) + random(-10, 10);
		s = saturation(c1) + random(-10, 10);
		l = lightness(c1) + random(-10, 10);
		a = random (0, 100);
		let newC = color(h, s, l);
		// newC.setAlpha(a);
		push();
		stroke(newC);
		rotate(45);
		strokeWeight(random(0, 2));
		let spacing = random(11, 33);
		translate(i*spacing,  -700);
		
		// line(0, 0, 0, 850);
		beginShape();
		curveVertex(0, -100);
		curveVertex(random (-20, 20), 250);
		curveVertex(random (-20, 20), 400);
		curveVertex(random (-20, 20), 550);
		curveVertex(random (-20, 20), 700);
		curveVertex(random (-20, 20), 850);
		curveVertex(random (-20, 20), 1000);
		curveVertex(random (-20, 20), 1150);
		curveVertex(random (-20, 20), 1300);
		curveVertex(0, 1450);
		endShape();
		// translate(i*-spacing, 425);
		pop();
	} 
	
	// stroke(clr);
	strokeWeight(random(1, 3));
	for (let i = 0; i < 500; i++){
		h = hue(c1) + random(-10, 10);
		s = saturation(c1) + random(-10, 10);
		l = lightness(c1) + random(-10, 10);
		a = random (10, 100);
		let newC = color(h, s, l);
		// newC.setAlpha(a);
		push();
		stroke(newC);
		strokeWeight(random(1, 3));
		rotate(-45);
		let spacing = random(5, 18);
		translate(i*spacing - 425, -450);
		// line(0, 0, 0, 850);
		beginShape();
		curveVertex(0, -100);
		curveVertex(random (-20, 20), 250);
		curveVertex(random (-20, 20), 400);
		curveVertex(random (-20, 20), 550);
		curveVertex(random (-20, 20), 700);
		curveVertex(random (-20, 20), 850);
		curveVertex(random (-20, 20), 1000);
		curveVertex(random (-20, 20), 1150);
		curveVertex(random (-20, 20), 1300);
		curveVertex(0, 1450);
		endShape();
		// translate(i*-spacing, 425);
		pop();
	}
	pop();
}


function drawSquares() {
	push();
	// console.log(bkgdC);
	let fColor = c2;
	noStroke();
	for (let i = -numSq/2; i < numSq/2; i++) {
		for(let j= -numSq/2; j < numSq/2; j++) {
			h = hue(fColor) + random(-10, 10);
			s = saturation(fColor) + random(-10, 10);
			l = lightness(fColor) + random(-10, 10);
			a = random (10, 100);
			let newC = color(h, s, l, a);
			newC.setAlpha(a);
			push();
			fill(newC);
			rotate(-45);
			let rectW = random(20, 80);
			let rectH = rectW * random(0.8, 1.3);
			let spacing = random(-100, 100);
			translate(i*spacing, j*spacing);
			rect(0, 0, rectW, rectH);
			// translate(i*-spacing, 425);
			pop();
		}
	}
	pop();
}



function drawRect() {
	push();
	let numREct = 0;
	blendMode(LIGHTEST);
	// console.log(bkgdC);
	let fC = c3;
	// fill(color(palette[fColor]));
	noStroke();

	// console.log(color(fColor));
	for (let i = -numSq/2; i < numSq/2; i++) {
		for(let j= -numSq/2; j < numSq/2; j++) {
			h = hue(fC) + random(-10, 10);
			s = saturation(fC) + random(-10, 10);
			l = lightness(fC) + random(-10, 10);
			a = random (10, 100);
			let newC = color(h, s, l, a);
			newC.setAlpha(a);
			numREct ++;
			// print("alpha of color is " + alpha(newC));
			push();
			if (numREct % 3 == 0) {
				push();
				blendMode(MULTIPLY);
				pop();
			}
			fill(newC);
			let rotations = random (35, 55);
			rotate(-rotations); 
			let rectW = random(20, 80);
			let rectH = rectW * random(1.3, 2);
			let spacing = random(-100, 100);
			let round = random(5, rectW/4);
			translate(i*spacing, j*spacing);
			rect(0, 0, rectW, rectH, round);
			// translate(i*-spacing, 425);
			pop();
		}
	}
	pop();
}


function drawWavies(times) {
	push();
	strokeWeight(random(0, 2));
	let waveWidth = random(20, 50);
	
	for (let i=0; i< times; i ++) {
		push();
		blendMode(MULTIPLY);
		h = hue(c5) + random(-10, 10);
		s = saturation(c5) + random(-10, 10);
		l = lightness(c5) + random(-10, 10);
		a = random (0, 100);
		let newC = color(h, s, l);
		// newC.setAlpha(a);
			if (i % 4 == 0) {
				push();
			 	blendMode(LIGHTEST);
		   	pop()
		 	}
		rotate(i);
		translate(i, i*random(0, 1));
		noFill();
		stroke(newC);
		let x = random(-100, 700);
		let y = random(-100, 700);
		
		beginShape();
		curveVertex(x, y);
		curveVertex(x, y);
		curveVertex(x+ random(0, 20*i), y+ random(0, 20*i));
		curveVertex(x+ random(0, 20*i), y+ random(0, 20*i));
		curveVertex(x+random(0, 20*i), y+random(0, 20*i));
		curveVertex(x+random(0, 20*i), y+random(0, 20*i));
		// curveVertex(leftFace + faceWidth/2 , 300 + faceHeight/2 + 6);
		curveVertex(x+ random(-20*i, 20*i), y+ random(-20*i, 20*i));
		curveVertex(x+ random(-20*i, 20*i), y+ random(-20*i, 20*i));
		curveVertex(x+ random(-20*i, 20*i), y+ random(-20*i, 20*i));
		curveVertex(x+ random(-20*i, 20*i), y+ random(-20*i, 20*i));
		curveVertex(x+ random(-20*i, 20*i), y+ random(-20*i, 20*i));
		endShape();
		beginShape();
		pop();
	}
	
	pop();
}


function drawmorerects() {
	push();
	blendMode(SOFT_LIGHT);
	// console.log(bkgdC);
	let fC = c4;
	let numRects = 0;
	// fill(color(palette[fColor]));
	noStroke();

	// console.log(color(fColor));
	for (let i = -numSq/4; i < numSq/4; i++) {
		for(let j= -numSq/4; j < numSq/4; j++) {
			h = hue(fC) + random(-10, 10);
			s = saturation(fC) + random(-10, 10);
			l = lightness(fC) + random(-10, 10);
			a = random (10, 100);
			let newC = color(h, s, l, a);
			newC.setAlpha(a);
			numRects++;
			// print("alpha of color is " + alpha(newC));
			push();
			fill(newC);
			let rotations = random (35, 55);
			rotate(-rotations);
			let rectW = random(10, 30);
			let rectH = rectW * random(1.3, 2);
			let spacing = random(-100, 100);
			let round = random(5, rectW/4);
			translate(i*spacing, j*spacing);
			if(numRects%4==0) {
				blendMode(MULTIPLY);
			} else if (numRects%3==0) {
				blendMode(DODGE);
			}
			rect(0, 0, rectW, rectH, round);
			
			// translate(i*-spacing, 425);
			pop();
		}
	}
	pop();
}



function drawCircles() {
	push();
	blendMode(MULTIPLY);
	// console.log(bkgdC);
	let fC = c3;
	let numCirc = 0;
	// fill(color(palette[fColor]));
	noStroke();

	// console.log(color(fColor));
	for (let i = -numSq/8; i < numSq/8; i++) {
		for(let j= -numSq/8; j < numSq/8; j++) {
			h = hue(fC) + random(-10, 10);
			s = saturation(fC) + random(-10, 10);
			l = lightness(fC) + random(-10, 10);
			a = random (10, 100);
			let newC = color(h, s, l, a);
			// newC.setAlpha(a);
			numCirc ++;
			// print("alpha of color is " + alpha(newC));
			push();
			fill(newC);
			rotate(-45);
			let rectW = random(5, 20);
			let rectH = rectW * random(0.7, 1.4);
			let spacingX = random(10, 500);
			let spacingY = random(50, 500);
			
			translate(spacingX, spacingY);
			
			if (numCirc%3==0){
				blendMode(LIGHTEST);
			}
			ellipse(0, 0, rectW, rectW);
			ellipse(0, 0, rectH, rectH);
			
			// translate(i*-spacing, 425);
			pop();
		}
	}
	pop();
}