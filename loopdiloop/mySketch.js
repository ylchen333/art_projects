// inpso: https://www.behance.net/gallery/84213899/-Mountains-Rivers?tracking_source=for_you_feed_featured_category&



// fork of Golan's seamlessLoopDemo
//
// Seamless looping GIF generator with p5.createloop and p5.func
// Be sure that the following scripts are included.
//
// To add p5.createloop, open Library in the Sketch tab 
// of OpenProcessing, then paste in this URL: 
// https://unpkg.com/p5.createloop@0.3.1/dist/p5.createloop.js
//
// To add p5.func, open Files in the Sketch tab, 
// Upload a copy of the following file
// then add p5.func.js to the Libraries 
// https://raw.githubusercontent.com/IDMNYU/p5.js-func/master/lib/p5.func.js

var myEaser;
var palette;


function setup() {
	//set up palette
	palette = ["teal", "lemonchiffon", "cadetblue", "tomato"]; // from book (indigo, yellow, pale blue, coral)
	// color(220,243,255)
	
	createCanvas(640, 640);
	frameRate(30);
	pixelDensity(1);
	// Here, change gif:false to true in order to export the GIF!
	createLoop({
		duration: 6,
		gif:false
	});
	animLoop.noiseFrequency(0.45); 
	
}


//------------------------------------------


function draw() {
	// background("lemonchiffon");
	background(255, 99, 71); // background not working
	//water background
	push();
	noStroke();
	fill(255, 99, 71, 200);
	rect(0, 0, width, height);
	pop();
	
	

	
	
	
	// mountains 
	
	noStroke();
	// var mountainG = new p5.Ease(); 
	// var mountainEase = mountainG["doubleExponentialSigmoid"](animLoop.progress, 0.7);
	mountains(height/1.3, 0,  height/1.4, width+10, palette[0], 333);
	push();
	rotate(PI);
	translate(-width, -200);
	mountains(height/3, 0,  height/3, width+10, palette[2], 4985);
	mountains(height/4, 0,  height/8, width+10, palette[0], 111);
	mountains(height/3, 0,  height/4, width+10, palette[3], 929);
	mountains(height/4, 0,  height/6, width+10, palette[1], 999);
	mountains(height/1.2, 0,  height/2, width+10, palette[3], 101);
	pop();
	
	let radius = sin(animLoop.theta) * height/4;
	let px = width/2 - cos(animLoop.theta) * width/2.5;
  let py = height/1.2 - sin(animLoop.theta) * (sin(animLoop.theta) * height/2.2);
	
	// push();
	// noStroke();
	// translate(0, -50);
	// sun(radius, px, py, palette[3], palette[1]);
	// pop();
	
	

// 	radius = 44 * cos(animLoop.theta);
// 	px = width/2 - cos(animLoop.theta) * width/3;
// 	py = height/4 - sin(animLoop.theta/2) * (sin(animLoop.theta) * height/2.4);
// 	push();
// 	noStroke();
// 	translate(0, 0);
// 	sun(radius, px, py, palette[1], palette[2]);
// 	pop();
	
	
	
	
	mountains(height, 0,  height/1.3, width+10, palette[0], 888);
	mountains(height, 0,  height/1.35, width+10, palette[3], 333);
	
	push();
	rotate(PI);
	translate(-width, -400);
	mountains(height, 0,  height/6, width+10, palette[3], 4985);
	// mountains(height, 0,  height/1.6, width+10, palette[1], 999);
	pop();
	
	mountains(height, 0,  height/1.5, width+10, palette[2], 888);
	// mountains right
	noStroke();
	mountains(height/4, 0,  height/3, width+10, palette[3], 686);
	mountains(height/1.6, 0,  height/5, width+10, palette[2], 333);
	
	// radius = width/4 * sin(animLoop.theta);
	// px = width/1.5 - cos(animLoop.theta) * width/2;
	// py = height/1.5 - sin(animLoop.theta/2) * (sin(animLoop.theta) * height/1.5);
	// push();
	// noStroke();
	// translate(0, -50);
	// sun(radius, px, py, palette[2], palette[1]);
	// pop();
	
	mountains(height, 0,  height/1.622, width+10, palette[3], 999);
	// mountains(height, 0,  height/1.8, width+10, palette[0], 1234);
	mountains(height, 0,  height/1.99, width+10, palette[3], 1983);
	
	
	// radius = 66;
	// px = width/2.6 - cos(animLoop.theta) * 66;
	// py = height - asin(animLoop.theta) * (sin(animLoop.theta) * 60);
	// push();
	// noStroke();
	// translate(0, -50);
	// sun(radius, px, py, palette[3], palette[1]);
	// pop();
	
	mountains(height, 0,  height*1.3, width+10, palette[2], 3321);
	// mountains(height, 0,  height, width+10, palette[0], 555);
	mountains(height, 0,  height/7, width+10, palette[1], 777);
	mountains(height, 0,  height/2, width+10, palette[3], 88);
	
	// radius = 66;
	// px = width/1.8 - cos(animLoop.theta) * 88;
	// py = height/3 - sin(animLoop.theta/2) * (sin(animLoop.theta) * 88);
	// push();
	// noStroke();
	// translate(0, 80);
	// sun(radius, px, py, palette[0], palette[2]);
	// pop();
	// radius = 88 * cos(animLoop.theta);
	// px = width/1.8 - cos(animLoop.theta) * 88;
	// py = height/3 - sin(animLoop.theta/2) * (sin(animLoop.theta) * 88);
	// push();
	// noStroke();
	// translate(0, 80);
	// sun(radius, px, py, palette[0], palette[2]);
	// pop();
	
	
	
	mountains(height, 0,  height*8, width+10, palette[0], 3268);
	
	
	
	mountains(height, 0,  height*1.2, width+10, palette[2], 22);
	
	// radius = 22 - cos(animLoop.theta);
	// px = width/8 - cos(animLoop.theta) * 33;
	// py = height/4 - sin(animLoop.theta*2) * (sin(animLoop.theta) * 33);
	// push();
	// noStroke();
	// translate(60, 200);
	// sun(radius, px, py, palette[2], palette[3]);
	// pop();
	
	mountains(height, 0,  height*2, width+10, palette[3], 88);
	
	// radius = 16 ;
	// px = width/8 - cos(animLoop.theta) * 66;
	// py = height/4 - sin(animLoop.theta/2) * (sin(animLoop.theta) * 222);
	// push();
	// noStroke();
	// translate(260, 344);
	// sun(radius, px, py, palette[1], palette[3]);
	// pop();
	

	
	
	
	push();
	noStroke();
	rotate(PI);
	translate(-width, -200);
	mountains(height, 0,  height/1.22, width+10, palette[0], 124);
	mountains(height, 0,  height/1.622, width+10, palette[3], 999);
	// mountains(height, 0,  height/1.8, width+10, palette[0], 1234);
	mountains(height, 0,  height/1.99, width+10, palette[3], 1983);
	pop();
	
	// radius = 33 + cos(animLoop.theta);
	// px = width/8 - cos(animLoop.theta) * 111;
	// py = height/4 - sin(animLoop.theta/2) * (sin(animLoop.theta) * 44);
	// push();
	// noStroke();
	// translate(460, 400);
	// sun(radius, px, py, palette[2], palette[1]);
	// pop();
	
	push();
	rotate(PI);
	translate(-width, -200);
	mountains(height, 0,  height*1.3, width+10, palette[2], 3321);
	// mountains(height, 0,  height, width+10, palette[3], 3321);
	mountains(height, 0,  height, width+10, palette[0], 3321);
	// mountains(height, 0,  height*1.3, width+10, palette[2], 868);
	pop();
	
	
	

	
	push();
	noStroke();
	// angleMode(DEGREES);
	rotate(PI);
	translate(-width, -200);
	mountains(height, 0,  height, width+10, palette[3], 6);
	mountains(height, 0,  height, width+10, palette[0], 454);
	pop();
	
	
	mountains(height, 0,  height*1.2, width+10, palette[1], 888);
	
// 	radius = 44 * sin(animLoop.theta);
// 	px = width/8 - cos(animLoop.theta) * 44;
// 	py = height/4 - sin(animLoop.theta) * (sin(animLoop.theta) * 44);
// 	push();
// 	noStroke();
// 	translate(0, -100);
// 	sun(radius, px, py, palette[3], palette[1]);
// 	pop();
	
// 	radius = 22 * sin(animLoop.theta);
// 	px = width/8 - cos(animLoop.theta) * 33;
// 	py = height/4 - sin(animLoop.theta) * (sin(animLoop.theta) * 44);
// 	push();
// 	noStroke();
// 	translate(110, -200);
// 	sun(radius, px, py, palette[3], palette[1]);
// 	pop();
}



// --------------------------------------------------------
function sun(radius, px, py, color1, color2) {
		// sun rising and falling moon
	// print("px, py: " + px + ", "+ py);
	
	
	fill(color1);
	circle(px, py, radius);
	fill(color2);
	circle(px, py, radius/1.3);

}

function mountains(baseY, leftX, mHeight, mWidth, color, seed) {
	// doing pixels takes too long (lots of lag)
	// print("hi in mountains");
	//curve vertex
	// noise dictates the number of high points?
	let noiseScale = 0.1;
	// let mx;
	let my;
	// print("mnoiseSclae, mountainNoiseVal: " + noiseScale +", " + noiseVal);
	let peaks = map(animLoop.noise1D(seed), -1, 1, baseY, baseY+mHeight);
	
	let e = random(-width/2, width/2);
	let d = random(40, 50); 
	// print("peaks is " + peaks);
	// let diffX = random(noiseScale*noiseVal);
	// let diffY = random(-noiseScale*noiseVal*mHeight, noiseScale*noiseVal*mHeight);
	
	
	for (let i = leftX; i < leftX+mWidth; i ++){
		// mx = map(animLoop.noise1D(1293), -1, 1, leftX, leftX+mWidth);
		my = map(animLoop.noise1D(seed), -1, 1, baseY, baseY-mHeight);
		
		let currMY = map(cos(i), 0, 1, my/3, my);
		// currMY -= i*noise(animLoop.noise1D(666));
		
		
		strokeWeight(3);
		stroke(color);
		line(i, baseY, i, baseY-currMY);
		
	}
	
}



