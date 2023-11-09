// https://pin.it/BAgpCgG
//cat glitch

let capture;
function setup() {
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  // background(255);
  capture.loadPixels(); 
  // tint(255,255,255, 90); // this fades out the video
  // image(capture, 0, 0); // comment this out soon!

  let px = mouseX; 
  let py = mouseY;
  // let pixelCol = capture.get(px, py); 
	let pix = capture.pixels; // do once per frame

	
	noStroke();
	background(44, 4,3);
	for (let i = 0; i < 640/10; i ++) {
		for (let j = 0; j < 480/10; j ++) {
			px = i*10;
			py = j*10;
			let index = (py*capture.width + px)*4; 
			// multiplied by 4 'cuz each RGBA pixel has 4 bytes!
			let r = pix[index+0]; // red byte
			let g = pix[index+1]; // green byte
			let b = pix[index+2]; // blue byte

			
			// stroke(color(r, g, b));
			
			if (r >180 && g > 180 && b > 180){
				fill(color(r, g, b, 170));
				text("🤺", px, py);
				fill(color(r, g, b, 100)); 
				circle(px, py, 10);
			} else if (r > 120 && g > 120 && b > 120){
				fill(color(r, g, b, 170));
				text("🖕", px, py);
				fill(color(r, g, b, 100)); 
				circle(px, py, 10);
			} else if (r > 60 && g > 60 && b > 60) {
				fill(color(r, g, b, 170));
				text("🤬", px, py);
				fill(color(r, g, b, 100)); 
				circle(px, py, 10);
			} 
			else if (r > 25 && g > 25 && b > 25){
				
				fill(color(r, g, b, 100)); 
				circle(px, py, 10);
				fill(color(r, g, b, 170));
				text("💩", px, py);
			} else {
				
				fill(color(r, g, b, 100)); 
				circle(px, py, 10);
				fill(color(r, g, b, 170));
				text("🕷️", px, py);
			} 
			
		}
	}
	
  
}