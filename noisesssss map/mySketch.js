function setup() {
	createCanvas(640, 640);
	background(100);
}

function draw() {
	let noiseScale=0.02;
	let d = pixelDensity(1);
	let c;
	background(100);
	loadPixels();
	
	for(let x = 0; x< width; x++){
		for(let y = 0; y < height; y++){
			let noiseVal = noise((x)*noiseScale, y*noiseScale);
			if (noiseVal < 0.4) {
				c = color(100*noiseVal, 255*noiseVal, 150*noiseVal);
			} else {
				c = color(69*noiseVal, 33*noiseVal, 250*noiseVal);
			}
			set(x, y, c);
		}
	}
	updatePixels();
	noLoop();
}