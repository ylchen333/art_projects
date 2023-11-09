let boolDoRefresh;

function setup() {
  createCanvas(640, 640);
  boolDoRefresh = true;
}

function draw() {
	rectMode(CENTER);
	
	
  if (boolDoRefresh) {
		background(139, 118, 166);
    // DRAW STUFF HERE....
		for (let i = 0; i < 8; i ++){
			for (let j = 0; j < 8; j ++){
				let ifits = randInt(0, 18);
				if (ifits == 2){
					//draw something
					fill(248, 229, 99);
					noStroke();
					push();
					blendMode(SCREEN);
					beginShape();
					vertex(55+ i*70, 80 +j *70);
					vertex(55+ i*70, 80 +j *70);
					curveVertex(70+ i*70, 75 +j *70);
					
					vertex(80+ i*70, 55 +j *70);
					vertex(80+ i*70, 55 +j *70);
					curveVertex(90+ i*70, 75 +j *70);
					
					vertex(105+ i*70, 80 +j *70);
					vertex(105+ i*70, 80 +j *70);
					curveVertex(90+ i*70, 85 +j *70);
					// curveVertex(90+ i*70, 95 +j *70);
					
					vertex(80+ i*70, 105 +j *70);
					vertex(80+ i*70, 105 +j *70);
					curveVertex(70+ i*70, 85 +j *70);
					// curveVertex(70+ i*70, 85 +j *70);
					
					vertex(55+ i*70, 80 +j *70);
					vertex(55+ i*70, 80 +j *70);
					endShape();
					pop();
				} else {
					// draw the regular thing
					fill(207, 175, 228);
					noStroke();
					push();
					blendMode(HARD_LIGHT);
					rect(80 +i*70, 80+j*70, 60, 60, 10);
					pop();
				}
			}
		}
    boolDoRefresh = false;
  }
}

function mousePressed() {
  boolDoRefresh = true;
}

function randInt(min, max){
	let i = random(min, max);
	i = round(i);
	if (i < min) {
		i = min;
	} else if (i > max){
		i = max;
	}
	return i;
}