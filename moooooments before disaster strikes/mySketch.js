// https://pin.it/1csbSCZ
// https://youtu.be/AD_TWloJ310?si=HIwsK0KDB4roKk_N

// let t = 0;
let timer = 0;
let timerStart = 0;
let countDown = 0;
let countDownStart = 20;

let cowCol = [];
let lh;
let rh;
let le;
let re;
let blob;
//for splot
let r;
let x;
let y;
let state;
let eyeR;


function setup() {
	createCanvas(600, 600);
	background(96, 114, 44);
	// t = millis();
	angleMode(DEGREES);
	cowCol = [color(232, 222, 211),color(96, 56, 43), color(38, 36, 40)];
	lh = cowCol[0];
	rh = cowCol[0];
	le = cowCol[0];
	re = cowCol[0];
	blob = cowCol[0];
	r = random(150, 300);
	x = random(150, 450);
	y = random(150, 450);
	state = 0;
	eyeR = 50;
	// randomSeed(100);
}

function draw() {
	background(132,166,98);
	
	
	
	
		
	drawLeftHorn(lh);
	drawRightHorn(rh);
	drawLeftEar(le);
	drawRightEar(re);
	drawPinkEars();
	drawCowBlob(blob);
	//mouth
	fill(226, 144, 145);
	beginShape();
	curveVertex(width/2-50, 200);
	curveVertex(width/2-50, 200);
	curveVertex(width/2+50, 200);
	curveVertex(width/2+75, 230);
	curveVertex(width/2-75, 230);
	curveVertex(width/2-50, 200);
	curveVertex(width/2+50, 200);
	endShape(CLOSE);
	push();
	blendMode(MULTIPLY);
	fill(186, 104, 105);
	circle(width/2 - 30, 218, 15);
	circle(width/2+30, 218, 15);
	pop();
	drawEyes(state, eyeR);
	
	
	timer = int(millis()/ 1000 - timerStart);     // counts up from the start time (0)
  countDown = int (countDownStart - timer); 
	
	
	if (timer > 5) {
		state = 1;
		textAlign(CENTER);
		fill(cowCol[2]);
		noStroke();
		textSize(27);
		// textFont('Helvetica');
		// text("Oh no!", 300, 500);
		// text("Mr.Chocopie has been dead for", 300, 525);
		// text((timer-5)+" seconds!", 300, 550);
	} else if (timer == 5){
		
		// eyeR = timer;
		drawEyes(state, eyeR);
		
		push();
		translate(x, y);
		blendMode(MULTIPLY);
		fill(205, 21, 35, 180);
		randomSeed(100);
		drawSplot();
		pop();
		
		// noLoop();
	} else if (timer == 4) {
		re = cowCol[1];
		eyeR += timer/20;
	} else if (timer == 3) {
		le = cowCol[1];
		eyeR += timer/20;
	} else if (timer== 2) {
		rh = cowCol[1];
		eyeR += timer/20;
	} else if (timer==1) {
		lh = cowCol[1];
		eyeR += timer/20;
	}
	
	t = millis();

	

	
	


}

function mousePressed() {
	timerStart = millis() / 1000;
	lh = cowCol[0];
	rh = cowCol[0];
	le = cowCol[0];
	re = cowCol[0];
	blob = cowCol[0];
	r = random(150, 300);
	x = random(250, 350);
	y = random(250, 350);
	
	eyeR = 50;
	state = 0;
}

function drawSplot() {
	angleMode(DEGREES);	
	noStroke();
	push();
	beginShape();
	for (let i = 0; i < 360; i += 5) {
		let vari = random(-r/3, r/3);
		let x = (r + vari)*cos(i);
		let y  = (r + vari)*sin(i);
		curveVertex(x, y);
	}
	endShape();
	pop();
}

function drawLeftHorn(color) {
	// horns
	// fill(219, 221, 228);
	noStroke();
	fill(color);
	beginShape();
	curveVertex(172, 138);
	curveVertex(172, 138);
	curveVertex(198, 85);
	curveVertex(225, 125);
	curveVertex(225, 125);
	endShape(CLOSE);
}
function drawRightHorn(color) {
	noStroke();
	fill(color);
	beginShape();
	curveVertex(367, 122);
	curveVertex(367, 122);
	curveVertex(389, 85);
	curveVertex(427, 144);
	curveVertex(427, 144);
	endShape(CLOSE);
}
function drawLeftEar(color) {
	fill(color);
	noStroke();
	beginShape();
	curveVertex(166, 140);
	curveVertex(166, 140);
	curveVertex(44, 196);
	curveVertex(55, 233);
	curveVertex(111, 250);
	curveVertex(111, 250);
	endShape(CLOSE);
}
function drawRightEar(color) {
	fill(color);
	noStroke();
	beginShape();
	curveVertex(434, 140);
	curveVertex(434, 140);
	curveVertex(556, 196);
	curveVertex(545, 233);
	curveVertex(489, 250);
	curveVertex(489, 250);
	endShape(CLOSE);
}
function drawPinkEars() {
		//pink ears
	
	fill(226, 144, 145);
	beginShape();
	curveVertex(146, 170);
	curveVertex(146, 170);
	curveVertex(75, 196);
	curveVertex(69, 222);
	curveVertex(111, 220);
	curveVertex(111, 220);
	endShape(CLOSE);
	
	beginShape();
	curveVertex(454, 170);
	curveVertex(454, 170);
	curveVertex(525, 196);
	curveVertex(531, 222);
	curveVertex(489, 220);
	curveVertex(489, 220);
	endShape(CLOSE);
}

function drawCowBlob(color) {
	noStroke();
	fill(color);
	//bDRAWBDABCoWB the cow body blob
	beginShape();
	curveVertex(50, 450);
	curveVertex(50, 450);
	curveVertex(550, 450);
	curveVertex(450, 150);
	curveVertex(150, 150);
	curveVertex(50, 450);
	curveVertex(550, 450);
	endShape(CLOSE);
	
	
}

function drawEyes(state, r) {
	if(state == 0) { // normale state
			
		//eyes
		fill(235);
		stroke(100);
		strokeWeight(3);
		circle(width/2 - 61, 168, r);
		circle(width/2 + 61, 168, r);
		fill(10);
		noStroke();
		circle(239, 173, r/2);
		circle(361, 173, r/2);
	}else {
			
		//eyes
		fill(200);
		stroke(100);
		strokeWeight(3);
		circle(width/2 - 61, 168, r);
		circle(width/2 + 61, 168, r);
		
		fill(66);
		push();
		translate(width/2 - 61, 168);
		rotate(45);
		line(0, -20, 0, 20);
		rotate(90);
		line(0, -20, 0, 20);
		pop();
		push();
		translate(width/2 + 61, 168);
		rotate(45);
		line(0, -20, 0, 20);
		rotate(90);
		line(0, -20, 0, 20);
		pop();
		
	}
}