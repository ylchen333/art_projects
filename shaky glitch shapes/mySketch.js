let palette = [];
let pointC = '';
let lineC = '';
let bezierC = '';
let arcC = '';
let rectC = '';
let rectRC = '';
let polylineC = '';
let ellipseC = '';
//background color
let bkgdC = '';


let lines = [];
let linex1 = 2;
let liney1 = 2;
let linex2 = 11;
let liney2 = 22; 
let lineDirectionX = 11;
let lineDirectionY = 8;

let pointx = 100;
let pointy = 100;
let pointDirectionX = -3;
let pointDirectionY = 6;

let ellipsex = 100;
let ellipsey = 100;
let ellipseDirectX = 1;
let ellipseDirectY = 10;

let polyx = 100;
let polyy = 100;
let polyStartY = polyy;
let polyDirectX = 1;
let polyDirectY = 10;

let numRectX = 0;
let numRectY = 0;

let rw = 60;
let rh = 110;

let bLooping = true;

function initEverything() {

	// set color palette of entire piece
	palette = rColors();
	bkgdC = lerpColor(color(palette[0]), color(palette[4]), 0.3);
	
	pointC = palette[round(random(0, 4))];
	lineC = palette[round(random(0, 4))];
	bezierC = palette[round(random(0, 4))];
	arcC = palette[round(random(0, 4))];
	rectC = lerpColor(bkgdC, color(palette[round(random(0, 4))]), 0.6);
	rectRC = lerpColor(bkgdC, color(palette[round(random(0, 4))]), 0.4);
	polylineC = bezierC;
	ellipseC = lerpColor(color(bezierC), color(palette[round(random(0, 4))]), random(0, 1));
	polygonC = lerpColor(bkgdC, color(palette[round(random(0, 4))]), 0.7);
	
	linex1 = random(80, 120);
	liney1 = random(100, 140);
	linex2 = random(80, 120);
	liney2 - random(120, 150);
	lineDirectionX = random(-15, 15);
	lineDirectionY = random(-15, 15);
	
	pointx = random(100, 500);
	pointy = random(100, 700);
	pointDirectionX = random(-15, 15);
	pointDirectionY = random(-15, 15);
	
	ellipsex = random(100, 500);
	ellipsey = random(100, 700);
	ellipseDirectX = random(-15, 15);
 	ellipseDirectY = random(-15, 15);

	polyx = random(450, 500);
	polyStartY = polyy;
	polyy = random(400, 500);
	// polyDirectX = random(-15, 15);
 	polyDirectY = random(5, 16);
	polyRange = random(130, 400);
	
	
	
	numRectX = random(3, 7);
	numRectY = random(3, 8);
	
	rw = random(50, 80);
	rh = random(90, 140);
}

function setup() {
	createCanvas(600, 800);
	background(222);
	initEverything();
	
}

function keyPressed() {
	bLooping = !bLooping;
	if (!bLooping) {
		noLoop();
	} else {
		initEverything();
		loop();
	}
}

function draw() {
	
	background(bkgdC);
	
	
	
	// circle(mouseX, mouseY, 20);
	stroke(10);
	
	//set home location of moving objects
	
	// change fill colors of each shape
	constant(arcC, rectRC, rectC);
	moving(pointC, lineC, bezierC);
	
	
	// debug stuffs
	// text(mouseX + "," + mouseY, 30, 30);
	
	// comment this out to get a gif
	 // noLoop();
}

// make randome colors
function rColors(){
	// var a = random(100, 255);
	// var r = randomSeed(0, 255);
	// var g = randomSeed(0, 255);
	// var b = randomSeed(0, 255);
	
	// create an array of arrays
	// the innermost array is a color palette --> predetrermined
	let first = ['#132A13', '#31572C', '#4F772D', '#90A955', '#ECF39E'];
	let second = ['#ECA400', '#EAF8BF', '#006992', '#27476E', '#001D4A'];
	let third = ['#F2F3AE', '#EDD382', '#FC9E4F', '#F4442E', '#020122'];
	let fourth = ['#FAE8EB', '#F6CACA', '#E4C2C6', '#CD9FCC', '#0A014F'];
	let fifth = ['#655A7C', '#AB92BF', '#AFC1D6', '#CEF9F2', '#D6CA98'];
	
	
	let palettes = [first, second, third, fourth, fifth];
	// let palettes = [first];
	
	let pal = random(palettes);
	return pal;
}


// draw the following
// line segment, rectangle, rounded rect, 
// ellipse, filled arc (pac-man), point (dot), 
// triangle, Bézier curve, polyline, and 
// polygon.

//add random
//add rotation?
// like gif thingy?

// let line, point, curve, polyline move
function moving(pointC, lineC, bezierC){
	// console.log("pointC:" + pointC + "  lineC:" + lineC + "  bezierC:" + bezierC);
	
	// points
	strokeWeight(15);
	stroke(color(pointC));
	pointx += pointDirectionX;
	pointy += pointDirectionY;
	if (pointx < 0){
		pointDirectionX = random(0, 15);
	} else if (pointx >= 600){
		pointDirectionX = random(-15, 0);
	}
	if (pointy < 0){
		pointDirectionY = random(0, 15);
	} else if (pointy >= 800){
		pointDirectionY = random(-15, 0);
	}
	
	point(pointx, pointy);
	
	
	// lines
	stroke(color(lineC));
	strokeWeight(5);
	linex1 += lineDirectionX;
	liney1 += lineDirectionY;
	linex2 += lineDirectionX;
	liney2 += lineDirectionY;
	// bounce?
	if (linex1 < 0){
		lineDirectionX = random(0, 15);
	} else if (linex1 >= 600){
		lineDirectionX = random(-15, 0);
	}
	if (liney1 < 0){
		lineDirectionY = random(0, 15);
	} else if (liney1 >= 800){
		// linex1 = 700;
		lineDirectionY = random(-15, 0);
	}
	if (linex2 < 0 ){
		lineDirectionX = random(0, 15);
	} else if (linex2 >= 600){
		lineDirectionX = random(-15, 0);
		// liney1 = 400;
	}
	if (liney2 < 0 ){
		lineDirectionY = random(0, 15);
	} else if (liney2 >= 800){
		lineDirectionY = random(-15, 0);
	}
	
	
	line(linex1, liney1, linex2, liney2);
	// append(lines, (linex1, liney1, linex2, liney2));
	// console.log(lines);
	// if (length(lines) >= 15){
	// 	lines = lines[1:];
	// }
	
	
	// polygon going only up and down
		// points
	noStroke();
	// stroke(color(pointC));
	polygonC.setAlpha(random(50, 180));
	fill(color(polygonC));
	// if (pointx < polyStartX){
	// 	pointDirectionX = random(0, 15);
	// } else if (pointx >= 600){
	// 	pointDirectionX = random(-15, 0);
	// }
	polyy += polyDirectY;
	if (polyy < polyStartY - polyRange){
		polyDirectY = random(1, 9);
	} else if (polyy >= polyStartY + polyRange){
		polyDirectY = random(-9, -1);
	}
	
	beginShape(TESS);
	vertex(polyx + 20, polyy + 20);
	vertex(polyx + 80, polyy + 20);
	vertex(polyx + 80, polyy + 40);
	vertex(polyx + 40, polyy + 40);
	vertex(polyx + 40, polyy + 60);
	vertex(polyx + 80, polyy + 60);
	vertex(polyx + 80, polyy + 80);
	vertex(polyx + 20, polyy + 80);
	endShape(CLOSE);
	
	

}



// let rect, round rect, ellipse, arc
// polygon, triangle stay semi constant??
//
function constant(arcC, rectRC, rectC) {
	// noStroke();
	strokeWeight(2);
	
	// rounded rect
	noStroke();
	fill(color(rectRC));
	let roundx1 = random(0.25, 0.4) * 20;
	let roundy1 = random(0.25, 0.4) * 20;
	rect(roundx1, roundy1, (600 - 2*roundx1), (800 - 2*roundy1), 15);
	
	// corners rect
	let bufferY = 22;
	let bufferX = 10;
	let rx1 = 20;
	let ry1 = 20;
	noStroke();
	rectC.setAlpha(random(100, 200));
	fill(color(rectC));
	for (var i = 0; i < numRectX; i++) {
		for(var j = 0; j < numRectY; j++) {
			rect(rx1, ry1, rw*random(1.01, 1.09), rh*random(1.01, 1.09));
			// console.log(" rx1, ry1, rx2, ry2: " + rx1 + ", " + ry1 + ", "  + rx2 + ", " + ry2);
			ry1 += (rh + bufferY*random(1.05, 1.15));
			// ry2 += (ry + 2*random(0.98, 1.01));
			
		}
		ry1 = 20;
		rx1 += (rw + bufferX*random(1.05, 1.15));
		
	}

	
	// ellipse
	noStroke();
	fill(color(ellipseC));
	
	ellipsex += ellipseDirectX;
	ellipsey += ellipseDirectY;
	if (ellipsex < 0){
		ellipseDirectX = random(0, 15);
	} else if (ellipsex >= 600){
		ellipseDirectX = random(-15, 0);
	}
	if (ellipsey < 0){
		ellipseDirectY = random(0, 15);
	} else if (ellipsey >= 800){
		ellipseDirectY = random(-15, 0);
	}
	
	ellipse(ellipsex, ellipsey, 30, 40);

		// arc
	fill(color(arcC));
	noStroke();
	arc(570, 880, 100, 1400, PI+QUARTER_PI, 0+QUARTER_PI);
	arc(470, 880, 110, 990, PI+QUARTER_PI, 0+QUARTER_PI);
	arc(360, 880, 130, 880, PI+QUARTER_PI, 0+QUARTER_PI);
	arc(270, 880, 70, 680, PI+QUARTER_PI, 0+QUARTER_PI);
	arc(190, 880, 90, 770, PI+QUARTER_PI, 0+QUARTER_PI);
	
	for (var x = 0; x < 11; x++) {
		// console.log("entered the arc for loop");
		
		fill(lerpColor(color(arcC), color('snow'), random(x*0.1,(x+1)*0.1)));
		arc(570, 880, 100, 1400 - 40*x, PI+QUARTER_PI, 0+QUARTER_PI);
		arc(470, 880, 110, 990 - 40*x, PI+QUARTER_PI, 0+QUARTER_PI);
		arc(360, 880, 130, 880 - 40*x, PI+QUARTER_PI, 0+QUARTER_PI);
		arc(270, 880, 70, 680 - 40*x, PI+QUARTER_PI, 0+QUARTER_PI);
		arc(190, 880, 90, 770 - 40*x, PI+QUARTER_PI, 0+QUARTER_PI);
	}
	
	stroke(color(bezierC));
	strokeWeight(5);
	noFill();
	bezier(0, 800, 98, 318, 410, 705, 620, 136);
	// bezier(0, 0, 40, 150, 45, 490, 35, 867);
	
	noFill();
	stroke(color(polylineC));
	beginShape();
	vertex(44, 830);
	vertex(178, 150);
	vertex(410, 409);
	vertex(610, 37);
	endShape();
	
	stroke(color(ellipseC));
	strokeWeight(2);
	ellipse(180, 152, 55, 33);
	ellipse(408, 407, 55, 33);
	
	fill(color('white'));
	noStroke();
	circle(180, 152, 15);
	circle(408, 407, 15);
	
	fill(color(polylineC));
	triangle(176, 149, 179, 157, 184, 151);
	triangle(408, 403, 404, 410, 413, 409);
	
	
}

