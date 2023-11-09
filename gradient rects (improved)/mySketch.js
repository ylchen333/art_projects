function setup() {
	createCanvas(700, 700);
	background(255);
}

function draw() {
	push();
	rectMode(CORNER);
	for (let i = 1; i < 15; i ++){
		let lp = map(i, 1, 14, 0, 1);
		fill(lerpColor(color('black'), color('white'), lp));
		stroke(lerpColor(color('black'), color('white'), lp));
		rect(45*i - 10, 660-45*i, 45, i*45);
	}
	pop();
}