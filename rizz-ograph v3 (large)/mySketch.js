

// limit colors : "fluorescentpink", "teal"
let margin = 320;
let noiseScale = 0.02;
let r = 95;
let pinkLayer ;
let tealLayer ;
let whiteLayer ;

function setup() {
	createCanvas(2550, 3300);
	background(100);
	angleMode(DEGREES);
	pixelDensity(5);
	pinkLayer = new Riso("fluorescentpink"); // pink layer
	tealLayer = new Riso("teal"); //teal layer
	whiteLayer = new Riso("white"); // white layer
}

function draw() {
	background(250);
	clearRiso();
	
	//pink lines in back
	
	// pinkLayer.fill(255);
	// pinkLayer.push();
	// pinkLayer.stroke(100);
	// pinkLayer.strokeWeight(0.5);
	// pinkLayer.translate(margin/2, 0);
	// lineMany(width/2+margin-7, height+10, 1.5, pinkLayer);
	// pinkLayer.pop();
	
	
	// tealLayer.fill(255);
	// tealLayer.push();
	// tealLayer.stroke(100);
	// tealLayer.strokeWeight(0.5);
	// tealLayer.translate(width/2-margin-r-5, 0);
	// lineMany(width/2+margin-5, height+10, 1.5, tealLayer);
	// tealLayer.pop();
	
	
	
	tealLayer.push();
	// tealLayer.translate(50, 50);
	for(let x = 0; x <= 10; x ++){
		for(let y = 0; y < 14; y ++){
			let a = noise(noiseScale*x*x, noiseScale*y*y);
			
			// tealLayer.fill(a*255);
			// tealLayer.noStroke();
			if((x%3==0&&y%3==0)||(x%3==2&&y%3==1)||(x%3==1&&y%3==2)){
				pinkLayer.push();
				pinkLayer.translate(margin+(x*2*r), 100+margin+(y*2*r));
				
				pinkLayer.fill(220+a);
				drawSplot(pinkLayer);
				// pinkLayer.fill(100*a);
				pinkLayer.pop();
			} else {
				tealLayer.push();
				tealLayer.fill(a*250);
				tealLayer.noStroke();
				tealLayer.translate(margin+(x*2*r), 100+margin+(y*2*r));
				drawSplot(tealLayer);
				tealLayer.pop();
			}
			
			//draw stars
			
			// if(y <677 && x<527) {
				pinkLayer.push();
				pinkLayer.fill(80+(sqrt(pow(4,y))));
				pinkLayer.noStroke();
				pinkLayer.translate(margin/1.3+(x*2*r), 100+margin/1.3+(y*2*r));
				star(r,r, pinkLayer);
				pinkLayer.pop();
				if ((x%3==0&&y%3==0)||(x%3==2&&y%3==1)||(x%3==1&&y%3==2)) {
					tealLayer.push();
					tealLayer.fill(a+200);
					tealLayer.noStroke();
					tealLayer.translate(margin/1.34+(x*2*r), 100+margin/1.34+(y*2*r));
					star(r, r, tealLayer);
					tealLayer.pop();
				}
			// }
		}
	}
	tealLayer.pop();
	
	// cutouts how to????
	whiteLayer.push();
	whiteLayer.translate(margin, margin);
	for(let x = 0; x <= 10; x ++){
		for(let y = 0; y <= 14; y ++){
			whiteLayer.fill(190);
			whiteLayer.noStroke();
			if ((x%3==0&&y%3==0)||(x%3==2&&y%3==1)||(x%3==1&&y%3==2)) {
				whiteLayer.fill(250);
			}
			star((x*2*r),100+(y*2*r), whiteLayer);
			
		}
	}	
	whiteLayer.pop();
	
	pinkLayer.cutout(whiteLayer);
	tealLayer.cutout(whiteLayer);
	
	drawRiso();
	noLoop();
}

				
function drawSplot(layer) {
	// angleMode(DEGREES);	
	layer.noStroke();
	layer.push();
	layer.beginShape();
	for (let i = 0; i < 360; i += 6) {
		let vari = randomGaussian(0, r/66);
		let x = (r + vari)*cos(i);
		let y  = (r + vari)*sin(i);
		layer.curveVertex(x, y);
	}
	layer.endShape();
	layer.pop();
}

// function randShi() {
// 	for (e = 0; e < 100; e += 0.5) {
		
// 	}
// }

function star(x, y, layer) {
	
	layer.push();
	layer.beginShape();
	layer.vertex(x-r, y);
	layer.vertex(x-r, y);
	layer.curveVertex(x-r/4, y-r/4);				
	layer.vertex(x, y-r/0.9);
	layer.vertex(x, y-r/0.9);
	layer.curveVertex(r/4+x, y-r/4);				
	layer.vertex(x+r, y);
	layer.vertex(x+r, y);
	layer.curveVertex(r/4+x, y+r/4);
	layer.vertex(x, r/0.9 +y);
	layer.vertex(x, r/0.9 +y);
	layer.curveVertex(x-r/4, y+r/4);
	layer.vertex(x-r, y);
	layer.vertex(x-r, y);
	layer.endShape();
	layer.pop();
}


function lineMany(w, h, d, layer){
	for (let i = 0; i < w; i +=d){
		layer.line(i, 26, i, h-26);
	}
}

function keyPressed() {
	if (key == "s") {
		exportRiso();
	} else if (key == 'p') {
		save("riso-screenshot.png");
	}
}
