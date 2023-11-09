/*
1. The art is square with a white background.
2. It consists of many short black lines.
3. The lines all have the same length (mostly)
4. border is not same width on all sides
5. there are gaps in between the forest of lines
6. the lines seem to be uniform in stroke weight across the canvas and across pieces
7. there are sections where there are 4 or 5 lines next to each other and of similar angles
8. some pieces are more horisontal/ vertical than others
9. gaps are kinda random? but not small gaps, decently sized gaps
10. \:/ ratio of which way seems fairly 1:1
11. the lines fill the canvas different amounts like certain pieces have a larger border, some a thinner one
*/
let boolLoop = true;
let noiseScale = 0.02;

function setup() {
	createCanvas(720, 720);
	background(252);
	angleMode(DEGREES);
}

function draw() {
	
	if(boolLoop) {
		background(252, 252, 252);
		//we draw
		// to make random margin, choose random number mx and my between 10 and 30
		let mx = random(20, 30);
		let my = random(20, 30);
		push();
		stroke(77);
		strokeWeight(1);
		translate(mx, my);
		for (let x = 0; x < 680; x +=10) {
			for (let y = 0; y < 680; y +=10) {
						// noise for rotation rotation angle
						let ra = noise(2*x*mx*noiseScale, y*my*noiseScale);
						// noise for draw or no draw
						let dd = noise(y*noiseScale, x*noiseScale);
						if (dd > 0.375) {
							push();
							translate(x, y);
							rotate(ra*360);
							line(0, 0, 0, 18);
							pop();
						}
				
				
				
				
				
			}
		}
		pop();
		boolLoop = false;
	}
}

function mousePressed() {
	boolLoop = true;
}