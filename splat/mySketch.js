
let boolDoRefresh;
let r;

function setup() {
	createCanvas(windowWidth, windowHeight);
	// background(135, 100, 90);
	boolDoRefresh = true;
	r = width;
}

function draw() {
	
	
	
	 if (boolDoRefresh) {
		 background(80, 117, 131);
    // DRAW STUFF HERE....
		r = height/4;
		drawSplot();
		// blendMode(SCREEN); 
		r = height/4.4;
		drawSplot();
		
		push();
		translate(-100, 100);
		r = height/7;
		drawSplot();
		pop();
		 
		push();
		translate(100, -200);
		r = height/12;
		drawSplot();
		pop();
		 
		push();
		translate(199, -250);
		r = height/10;
		drawSplot();
		pop();
		 
		push();
		translate(300, 200);
		r = height/22;
		drawSplot();
		r = height/26;
		drawSplot();
		pop();
		 
		push();
		translate(-width/3, -66);
		r = height/21;
		drawSplot();
		pop();
		 
		push();
		translate(width/9, -height/17);
		r = height/33;
		drawSplot();
		pop();
		 
		push();
		translate(-width/3, height/2.5);
		r = height/44;
		drawSplot();
		pop();
		 
    boolDoRefresh = false;
	 }
}

function drawSplot() {
		// background(80, 117, 131);
		angleMode(DEGREES);
		
		fill(218, 231, 208);
		noStroke();
		
		 
		push();
		blendMode(SOFT_LIGHT);
		translate(width/2, height/2);
		beginShape();
		for (let i = 0; i < 360; i += 5) {
			let vari = randomGaussian(-r/50, r/45);
			let x = (r + vari)*cos(i);
			let y  = (r + vari)*sin(i);
			curveVertex(x, y);
		}
		endShape();
		pop();
}

function mousePressed() {
  boolDoRefresh = true;
}