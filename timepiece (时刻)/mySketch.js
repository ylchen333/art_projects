// https://en.wikipedia.org/wiki/Traditional_Chinese_timekeeping#:~:text=Each%20sh%C3%AD%20(%E6%99%82%3B%20%E6%97%B6),midnight%20in%20the%20middle%20of



var prevSec;
var millisRolloverTime;
var characterList;
var palette;

//--------------------------
function setup() {
  createCanvas(windowWidth, windowHeight);
  millisRolloverTime = 0; 
	shiCharacterList = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未","申", "酉", "戌", "亥"];
	keCharacterList = ["一刻", "二刻", "三刻", "四刻", "五刻", "六刻", "七刻", "八刻"];
	palette = ["teal", "mistyrose", "cadetblue", "lightpink", "deeppink", "hotpink"];
	// darkcyan
	angleMode(DEGREES);
}

//--------------------------
function draw() {
	
	var SHI = (hour())/2;
	// H = 22;
  var KE = minute()/14.4;
	var FEN = (second())/14.4;
	 // Reckon the current millisecond, 
  // particularly if the second has rolled over.
  // Note that this is more correct than using millis()%1000;
  if (prevSec != FEN) {
    millisRolloverTime = millis();
  }
  prevSec = FEN;
  var mils = (millis() - millisRolloverTime);
	FEN = (second()+mils/1000)/14.4;
	KE = (minute()+FEN)/14.4;
	SHI = (hour()+KE)/2;
	// var mils = (millis());
  // var FEN = (second()+mils/1000)/14.4;
	// print("SHI is " + SHI);
	// print("KE is " + KE);
	// print("FEN is " + FEN);
	
	
	let bkgdColor1 = (SHI < 6)? lerpColor(color(palette[2]), color(palette[1]), 12/SHI) : lerpColor(color(palette[1]), color(palette[2]), 12/SHI) ;
  background(bkgdColor1); 

  // bkgd mountains
	push();
	noStroke();
	mountains(lerpColor(bkgdColor1, color(palette[0]), 0.1), 2, palette[3], 124, width, height);
	translate(-33, 23);
	mountains(lerpColor(bkgdColor1, color(palette[0]), 0.2), 1, palette[3], 231, width+33, height/1.3);
	translate(-22, 13);
	mountains(lerpColor(bkgdColor1, color(palette[0]), 0.3), 2, palette[3], 333, width+55, height/1.8);
	translate(-95, 11);
	mountains(lerpColor(bkgdColor1, color(palette[0]), 0.4), 3, palette[3], 868, width+155, height/2.4);
	translate(63, height/4);
	mountains(lerpColor(bkgdColor1, color(palette[0]), 0.5), 3.5, palette[3], 666, width+55, height/3);
	pop();
  

 

	
	let radius = sin(SHI*30) + height/6;
	let px = width/2 - cos(SHI*30) * width/12;
  let py = height/2 - sin(SHI*30) * radius/2;
	
	let moonradius = sin(KE* 45) + height/12;
	let moonpx = px - cos(KE * 45) * (width/12 + radius);
  let moonpy = py - sin(KE * 45) * (moonradius + radius);
	
	let starradius = sin((FEN)*45) + height/36;
	let starpx = moonpx - cos(FEN*45) * (starradius + moonradius) ;
  let starpy = moonpy - sin(FEN*45) * (starradius + moonradius) ;
	
	push();
	translate(0, -height/22);
	strokeWeight(2);
	stroke(lerpColor(color(palette[4]), color(bkgdColor1), 0.8));
	line(px, py, moonpx, moonpy);
	stroke(lerpColor(color(palette[5]), color(bkgdColor1), 0.8));
	line(moonpx, moonpy, starpx, starpy);
	pop();
	
	//sun based on hour of day
	push();
	noStroke();
	translate(0, -height/22);
	// translate(0, -66);
	fill(palette[4]);
	//glow effect - source: https://github.com/Creativeguru97/YouTube_tutorial/tree/master/p5_hacks/Glow_effect
	drawingContext.shadowBlur = radius;
	drawingContext.shadowColor = color(palette[4]);
	circle(px, py, radius);
	textSize(44);
	fill(palette[3]);
	textAlign(CENTER, CENTER);
	text(shiCharacterList[int(SHI-1)], px, py);
	pop();
	
	//moon based on min of day
	push();
	noStroke();
	translate(0, -height/22);
	fill(palette[5]);
	drawingContext.shadowBlur = moonradius;
	drawingContext.shadowColor = color(palette[5]);
	circle(moonpx, moonpy, moonradius);
	textSize(44);
	// fill(palette[5]);
	textSize(18);
	fill(palette[3]);
	textAlign(CENTER, CENTER);
	text(keCharacterList[int(KE)], moonpx, moonpy);
	pop();
	
	//star based on min of day
	push();
	noStroke();
	translate(0, -height/22);
	fill(palette[3]);
	drawingContext.shadowBlur = starradius*1.5;
	drawingContext.shadowColor = color(palette[5]);
	circle(starpx, starpy, starradius*1.5);
	fill(palette[1]);
	star(starpx, starpy, starradius/2);
	pop();
	
	
	push();
	noStroke();
	let seed1 = map(FEN, 0, prevSec, 222, 888);
	let nod1 = map(sin(FEN), 0, prevSec, 3, 6);
	translate(-200, height/1.5);
	mountains(lerpColor(bkgdColor1, color(palette[0]), 0.76), nod1, palette[3], seed1, width+200, height/9);
	translate(133, height/22);
	seed1 = map(sin(FEN), 0, prevSec, 549, 599);
	// nod1 = map(FEN, 0, prevSec, 2, 5);
	mountains(lerpColor(bkgdColor1, color(palette[0]), 0.89), nod1, palette[3], seed1, width+100, height/9);
	translate(-22, height/8);
	mountains(lerpColor(bkgdColor1, color(palette[0]), 0.94), 4, palette[3], 981, width+155, height/7);
	translate(0, height/2.4);
	// seed1 = map(millis(), 0, prevSec, 233, 288);
	// nod1 = map(millis(), 0, prevSec, 2, 6);
	mountains(lerpColor(bkgdColor1, color(palette[0]), 0.99), 3, palette[3], 66, width, height/9);
	pop();
}


//--------------------------------




function mountains(closerColor, nod, mistColor, seed, mWidth, mHeight)
{
  //FIND THE REFERENCE Y OF EACH MOUNTAIN:
  // let y0 = width - 500;  //fist reference y
  // let i0 = 30;  //initial interval
  
  // let cy = [0.0, 0.0]; //initialize the reference y array
  // for (let j = 0; j < 2; j++)
  // {
  //   cy[9-j] = y0;
  //   y0 -= i0 / pow(1.2, j);
  // }
  
  
  //DRAW THE MOUNTAINS/
  // let nod = int(10*nod/width); // 0...10
  noiseDetail(nod, 0.90);
	
	fill(closerColor);
	stroke(closerColor);
  
  for (let px = 0; px < mWidth; px ++){          
    let nx = px/200; 
    let ny = noise(nx);
    let py = map(ny,0,1, 0,mHeight); 
		strokeWeight(2);
    line(px,height, px, py);
		// vertex(px, py);
		// if (px == 0 || px + 22 > mWidth) {
		// 	vertex(px, py);
		// }
			
  }
  
}


function star(x, y, r) {
	
	push();
	beginShape();
	vertex(x-r, y);
	vertex(x-r, y);
	curveVertex(x-r/4, y-r/4);				
	vertex(x, y-r/0.9);
	vertex(x, y-r/0.9);
	curveVertex(r/4+x, y-r/4);				
	vertex(x+r, y);
	vertex(x+r, y);
	curveVertex(r/4+x, y+r/4);
	vertex(x, r/0.9 +y);
	vertex(x, r/0.9 +y);
	curveVertex(x-r/4, y+r/4);
	vertex(x-r, y);
	vertex(x-r, y);
	endShape();
	pop();
}