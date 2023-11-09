let b;

function setup() {
	createCanvas(640, 640);
	background(88, 122, 22);
}

function draw() {
	background(88, 122, 22);
	
	// stiches of length 40
	push();
	for(let i = 0; i < 64; i ++) {
		// for(let j = 0; j < 64; j ++) {
			b = randInt(0, 10);
			if(b%2 == 0){
			
				blendMode(SCREEN);
				strokeWeight(5);
				stroke(color(160, 55, 24));
				alternateHori(0, i*40);
			} else {
				blendMode(DODGE);
				strokeWeight(5);
				stroke(color(122, 42, 18));
				alternateHori(40, i*40);
			}
			
			b = randInt(0, 10);
			if(b%2 == 0){
				blendMode(DODGE);
				strokeWeight(5);
				stroke(color(218, 164, 15));
				alternateVert(i*40, 0);
			} else {
				blendMode(SCREEN);
				strokeWeight(5);
				stroke(color(125, 133, 17));
				alternateVert(i*40, 40);
			}
		
	}
	pop();
	noLoop();
}

function mousePressed() {
  loop();
}

function alternateVert(x, y) {
	for (let i = 0; i <32; i++){
		line(x, i*80 +y, x, i*80 +y+40);
	}
  
}
function alternateHori(x, y) {
	for (let i = 0; i <32; i++){
		line(i*80 +x, y, i*80 +x+40, y);
	}
  
}

function randInt(min, max){
	let i = random(min, max);
	i = round(i);
	if (i < 0) {
		i = 0
	} else if (i > 4){
		i = 4;
	}
	return i;
}