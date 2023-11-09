

// limit colors : "fluorescentpink", "teal"
let margin = 50;
let noiseScale = 0.02;
let r = 15;
let pinkLayer ;
let tealLayer ;
let whiteLayer ;

function setup() {
	createCanvas(1275, 1650);
	background(100);
	angleMode(DEGREES);
	pixelDensity(1);
	pinkLayer = new Riso("fluorescentpink"); // pink layer
	tealLayer = new Riso("teal"); //teal layer
	whiteLayer = new Riso("white"); // white layer
}

function draw() {
	background(250);
	clearRiso();
	
	
	tealLayer.push();
	for(let x = 0; x < (width-margin*2)/(r*2); x ++){
		for(let y = 0; y < (height-margin*2)/(r*2); y ++){
			let a = noise(noiseScale*x*y, noiseScale*(height/2 -y)*(width/2-x));
			
			// tealLayer.fill(a*255);
			// tealLayer.noStroke();
			if(a<0.28){
				tealLayer.push();
				tealLayer.fill(a*310);
				tealLayer.noStroke();
				tealLayer.translate(margin+(x*2*r), margin+(y*2*r));
				drawSplot(tealLayer);
				tealLayer.pop();
			} else {
				pinkLayer.push();
				pinkLayer.translate(margin+(x*2*r), margin+(y*2*r));
				
				pinkLayer.fill(533*a);
				drawSplot(pinkLayer);
				// pinkLayer.fill(100*a);
				pinkLayer.pop();
			}
			pinkLayer.push();
			pinkLayer.translate(margin+(x*2*r), margin+(y*2*r));	
			pinkLayer.fill(133*a);
			drawSplot(pinkLayer);
			pinkLayer.pop();
			
			//draw stars
			
			// if(y <677 && x<527) {
				pinkLayer.push();
				pinkLayer.fill(80+(sqrt(pow(4,y))));
				pinkLayer.noStroke();
				pinkLayer.translate(margin/1.3+(x*2*r), margin/1.3+(y*2*r));
				star(r,r, pinkLayer);
				pinkLayer.pop();
				if (a <0.28) {
					tealLayer.push();
					tealLayer.fill(a+250);
					tealLayer.noStroke();
					tealLayer.translate(margin/1.34+(x*2*r), margin/1.34+(y*2*r));
					star(r, r, tealLayer);
					tealLayer.pop();
				} else {
					pinkLayer.push();
					pinkLayer.fill(a+200);
					pinkLayer.noStroke();
					pinkLayer.translate(margin/1.34+(x*2*r), margin/1.34+(y*2*r));
					star(r,r, pinkLayer);
					pinkLayer.pop();
				}
			// }
		}
	}
	tealLayer.pop();
	
	// cutouts how to????
	whiteLayer.push();
	whiteLayer.translate(margin, margin);
	for(let x = 0; x <= (width-margin*2)/r; x ++){
		for(let y = 0; y <= (height-margin*2)/r; y ++){
			whiteLayer.fill(150);
			whiteLayer.noStroke();
			if ((x%4==0&&y%4==0)||(x%4==2&&y%4==1)||(x%4==1&&y%4==2)) {
				whiteLayer.fill(255);
			}
			star((x*2*r),(y*2*r), whiteLayer);
			
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
