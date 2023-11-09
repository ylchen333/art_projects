// inspo https://www.pinterest.com/pin/140806231947864/
let c1;
let c2;
let c3;
let c4;
let c5;
let palette = [];
let x;
let y;

function define() {
	c1 = color(59, 86, 82);
	c2 = color(64, 76, 64);
	c3 = color(218, 183, 162);
	c4 = color(20, 26, 24);
	c5 = color(135, 140, 118);
	palette = [c1, c2, c3, c4, c5];

	x = windowWidth;
	y = windowHeight;

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

// random coordinate in one of the 4 quadrants
function randCoor(quad){
	let res = [];
	if (quad == 1){
		let x = random(windowWidth/2);
		let y = random(windowHeight/2);
		res = [x, y];
		return res;
	} else if (quad == 2){
		let x = random(windowWidth/2, windowWidth);
		let y = random(windowHeight/2);
		res = [x, y];
		return res;
	} else if (quad == 3){
		let x = random(windowWidth/2);
		let y = random(windowHeight/2, windowHeight);
		res = [x, y];
		return res;
	}else if (quad == 4){
		let x = random(windowWidth/2, windowWidth);
		let y = random(windowHeight/2, windowHeight);
		res = [x, y];
		return res;
	}
}

function setup() {
	define();
	createCanvas(windowWidth, windowHeight);
	noStroke();
	background(color(230, 216, 202));
	noLoop();
}

function draw() {
	// let t = randInt(0, 5);
	fill(color(palette[randInt(0, 5)]));
	// print("the random index is "+ t);
	blendMode(LIGHTEST);
	let ulx = randCoor(1)[0];
	let uly = randCoor(1)[1];
	let urx = randCoor(2)[0];
	let ury = randCoor(2)[1];
	let llx = randCoor(3)[0];
	let lly = randCoor(3)[1];
	let lrx = randCoor(4)[0];
	let lry = randCoor(4)[1];
	quad(ulx, uly, urx, ury, lrx, lry, llx, lly);
	
	fill(color(palette[randInt(0, 5)]));
	blendMode(DODGE);
	ulx = randCoor(1)[0];
	uly = randCoor(1)[1];
	urx = randCoor(2)[0];
	ury = randCoor(2)[1];
	llx = randCoor(3)[0];
	lly = randCoor(3)[1];
	lrx = randCoor(4)[0];
	lry = randCoor(4)[1];
	quad(ulx, uly, urx, ury, lrx, lry, llx, lly);
	
	fill(color(palette[randInt(0, 5)]));
	blendMode(BURN);
	ulx = randCoor(1)[0];
	uly = randCoor(1)[1];
	urx = randCoor(2)[0];
	ury = randCoor(2)[1];
	llx = randCoor(3)[0];
	lly = randCoor(3)[1];
	lrx = randCoor(4)[0];
	lry = randCoor(4)[1];
	quad(ulx, uly, urx, ury, lrx, lry, llx, lly);
	
	fill(color(palette[randInt(0, 5)]));
	blendMode(OVERLAY);
	ulx = randCoor(1)[0];
	uly = randCoor(1)[1];
	urx = randCoor(2)[0];
	ury = randCoor(2)[1];
	llx = randCoor(3)[0];
	lly = randCoor(3)[1];
	lrx = randCoor(4)[0];
	lry = randCoor(4)[1];
	quad(ulx, uly, urx, ury, lrx, lry, llx, lly);
	
	fill(color(palette[randInt(0, 5)]));
	blendMode(SOFT_LIGHT);
	ulx = randCoor(1)[0];
	uly = randCoor(1)[1];
	urx = randCoor(2)[0];
	ury = randCoor(2)[1];
	llx = randCoor(3)[0];
	lly = randCoor(3)[1];
	lrx = randCoor(4)[0];
	lry = randCoor(4)[1];
	quad(ulx, uly, urx, ury, lrx, lry, llx, lly);
	
	ulx = randCoor(1)[0];
	uly = randCoor(1)[1];
	urx = randCoor(2)[0];
	ury = randCoor(2)[1];
	llx = randCoor(3)[0];
	lly = randCoor(3)[1];
	lrx = randCoor(4)[0];
	lry = randCoor(4)[1];
	quad(ulx, uly, urx, ury, lrx, lry, llx, lly);
	blendMode(REMOVE);
}