let center;
let yw;
let gg;
let triHeight;
let triWidth;
let p;

// observations/visual facts about big ned
// 1. the yellow to dark green ration is smaller on the bot than the top
// 2. the triangles of the top and bot look like right triangles
// 3. the 'white' is off white like cream?
// 4. yellow trangle location is diff top and bot
// 5. triangles r really small compared to the vast blank space surrounding it

function setup() {
	createCanvas(windowWidth, windowHeight);
	// colorMode(HSL, 100);
	background(color(242, 239, 226));
	p = map(mouseY, 0, windowHeight, windowHeight/30, windowHeight/2);
	//set of variable values
	center = windowWidth/2;
	// print("center is "+ center);
	// print("canvas width is "+ width);
	yw = color(222, 189, 67); // yellow color
	gg = color(44, 53, 54); // green grey color
	triHeight = windowHeight/30;
	triWidth = 8;
	noStroke();
}

function draw() {
	createCanvas(windowWidth, windowHeight);
	p = map(mouseY, 0, windowHeight, windowHeight/30, windowHeight/2);
	center = windowWidth/2;
	triHeight = p;
	triWidth =  p/2;
	//top two triangles
	fill(gg);
	triangle(center - triWidth, 0, center + triWidth, 0, center + triWidth, triHeight);
	fill(yw);
	triangle(center - triWidth, 0, center- triWidth/2, 0, center- triWidth/2, triHeight/4);
	//bot two triangles
	fill(gg);
	triangle(center - triWidth, windowHeight, center +triWidth, windowHeight, center -triWidth, windowHeight-triHeight);
	fill(yw);
	triangle(center - triWidth, windowHeight, center - triWidth/2, windowHeight, center -triWidth, windowHeight-triHeight/4);
}