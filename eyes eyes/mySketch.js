
let x;
let y;

function setup() {
	createCanvas(640, 640);
	background(100);
	x =0;
	y = 0;
}

function draw() {
	angleMode(DEGREES);
	
	// textSize(50);
	// text("trig eye folowing", 300, 300);
	
	// background to cover previous frames
	background(131, 136, 148);
	// eye white
	fill(245);
	noStroke();
	circle(320, 320, 250);
	
	// pupil, must change according to mousex
	push();
	// translate(320,320);
	// rotate( a);
	translate(320 + x, 320 +y);
	fill(50);
	circle(0, 0, 120);
	translate(22, -27);
	fill(250)
	ellipse(0, 0, 22, 18);
	pop();
	
	
	let a = atan2(mouseY - height / 2, mouseX - width / 2);
	let mx = (cos(a)*60); // 0.99*x +0.01*
	let my = (sin(a)*60); //0.99*y +0.01*
	if (195<mouseX && mouseX< 445 && 195 <mouseY && mouseY < 445) {
		// print("x and y r within range: x, y "+ x + ", " + y);
		// cursor is inside the eye
		mx = map (mouseX, 195, 445, -22, 22);
		my = map (mouseY, 195, 445, -22, 22);
		
	}
	// cursor is outside the eye
	x = 0.96*x +0.04*mx;
	y = 0.96*y +0.04*my;
	
	
	// highlight
}