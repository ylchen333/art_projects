function setup() {
	angleMode(DEGREES);
	createCanvas(420, 420);
	background(color(255, 255, 255));
}

function draw() {
	//vertical, arcs on right side
	for(let i = 0; i < 8; i ++){
		//horizontal, arcs on leftside
		for(let j = 0; j < 8; j ++){
			//draw the 3 vertical dots
			strokeWeight(1.3);
			noFill();
			point(70+j*40, 50+i*40);
			point(70+j*40, 60+i*40);
			point(70+j*40, 70+i*40);
			
			// draw arcs
			if (i%2== 1) { 
				arc(70+j*40, 55+i*40, 10, 10, 90, 270);
			} 
			if (j%2 == 1 ) { 
				arc(70+j*40, 55+i*40, 10, 10, -90, 90);
			} 
			if (i>=4  ) { // & i%2== 0
				arc(70+j*40, 65+i*40, 10, 10, 90, 270);
			} 
			if (j >=4) { // & i%2== 0
				arc(70+j*40, 65+i*40, 10, 10, -90, 90);
			} 
			if (i%8 == 2 || i%8 == 3 || i%8 == 6 || i%8 == 7 ) { 
				arc(70+j*40, 60+i*40, 20, 20, 90, 270);
			} 
			if (j%8 == 2 || j%8 == 3 || j%8 == 6 || j%8 == 7 ) { 
				arc(70+j*40, 60+i*40, 20, 20, -90, 90);
			} 
		}
	}
}