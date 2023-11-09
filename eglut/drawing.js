// "use strict";
// used dan shiffman's the nature of code to help
const { Engine, 
			 	Bodies, 
			 	Composite, 
			 	Body, 
			 	Vector, 
			 	Render,
				Mouse,
  			MouseConstraint
			} = Matter;

// let engine;
let canvas;
// Make the Engine
let engine;
let mouse, mouseConstraint;

// convexhll initializer
var convexhull;
let mic;
let amp;
// let render;
let palette = [];
// array for all critters
let critters = [];
// let critters2 = [];
// An array for all boundaries
let boundaries = [];
let bkgdV1;
let bkgdV2;
let bkgdV3;
let bkgdV4
let cx, cy;

function setup() {
	pixelDensity(1);
	palette = [color(152, 141, 78), color(167, 69, 19), color(13, 75, 16),color(222, 130, 114), color(100, 147, 182)];
	canvas = createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	
  engine.gravity = Vector.create(0, 0);
	// make boundaries the mouseX mouseY?
	//create & start an audio input
  mic = new p5.AudioIn();
  mic.start();

  //create an amplitude object that will use mic as input
  // amp = new p5.Amplitude();
  // amp.setInput(mic);
  // Add 4 boundaries, 4 walls: https://www.youtube.com/watch?v=4j7Umwfx60Q
  // Add a bunch of fixed boundaries
  boundaries.push(new Boundary(width / 2, height - 5, width, 10));
  boundaries.push(new Boundary(width / 2, 5, width, 10));
  boundaries.push(new Boundary(5, height / 2, 10, height));
  boundaries.push(new Boundary(width - 5, height / 2, 10, height));

	bkgdV1 = initVertices(10);
	bkgdV2 = initVertices(10);
	bkgdV3 = initVertices(10);
	bkgdV4 = initVertices(10);
	
	mouse = Mouse.create(canvas.elt);
  let options = {
    mouse: mouse,
    constraint: {
      stiffness: 0.7,
    },
  };
  mouseConstraint = MouseConstraint.create(engine, options);
  Composite.add(engine.world, mouseConstraint);
	
	attractor = new Attractor(mouseX, mouseY);
	
	for(let i = 0; i < 10; i ++) {
		let currCrit = new Critter(random(20)+width/2, random(20)+height/2, palette);
    critters.push(currCrit);
	}
	
  Matter.Events.on(engine, "collisionStart", handleCollisions);
}

function draw() {
	background(244, 243, 240, 180);
	// background shapes
	
	
	push();
	noStroke();
	blendMode(MULTIPLY);
  fill(color(222, 130, 114, 10));
	var tightness = 1.0/3.8;
	push();
	translate(-100, -100);
  drawVerticesBezierVERT(bkgdV1, tightness);
	pop();
	push();
	translate(245, 100);
	tightness = 1.0/5.0;
	drawVerticesBezierVERT(bkgdV2, tightness);
	pop();
	push();
	translate(-width/4, 333);
	tightness = 1.0/5.0;
	drawVerticesBezierVERT(bkgdV3, tightness);
	pop();
	push();
	translate(-width/2.5, 100);
	tightness = 1.0/5.0;
	drawVerticesBezierVERT(bkgdV4, tightness);
	pop();
	push();
	translate(width/1.3, height/4);
	rotate(50);
	tightness = 1.0/5.0;
	drawVerticesBezierVERT(bkgdV1, tightness);
	pop();
	push();
	translate(width/4, -height/8);
	rotate(10);
	tightness = 1.0/2.0;
	drawVerticesBezierVERT(bkgdV3, tightness);
	pop();
	push();
	translate(width/3, -height/2.8);
	rotate(3);
	tightness = 1.0/3.5;
	drawVerticesBezierVERT(bkgdV2, tightness);
	pop();
	push();
	translate(width/3, height/1.4);
	rotate(22);
	tightness = 1.0/3.3;
	drawVerticesBezierVERT(bkgdV1, tightness);
	pop();
	pop();
	
	
	Engine.update(engine);
	
	// create base blob --> golan's convex hull
	
	push();
  beginShape();
	noStroke();
  
  // for (let i = 0; i < myHull.length; i++) {
  // let [hullX, hullY] = myHull[i].getCoord();
  //   curveVertex(hullX, hullY);
  // }
	tightness = 1.0/3.8;
  // endShape(CLOSE);
	let myHull = makeHull(critters);
	push();
	blendMode(BLEND);
	stroke(color(62, 92, 74)); 
	fill(color(62, 92, 74));
  strokeWeight(80); 
  drawVerticesBezier(myHull, tightness);
	pop();
	push();
  stroke(lerpColor(color(62, 92, 74), color(232, 222, 194), 0.8)); 
  strokeWeight(60); 
  strokeJoin(ROUND);
	// noStroke();
  fill(lerpColor(color(62, 92, 74), color(232, 222, 194), 0.8));
  drawVerticesBezier(myHull, tightness);
	pop();
	pop();
  
	// print("-------------------------");
	// print("cx, cy: "+cx+", "+cy);
	// print("-------------------------");
	noStroke();
	// fill('re 

	
	let level = mic.getLevel();
	// print("level is " + level);
	// Iterate over the critters backwards
  for (let i = critters.length - 1; i >= 0; i--) {
		// apply attraction force to all critters
		let force = attractor.attract(critters[i]); // returns a vector
		if (level > 0.08) {
			// print("volume high");
			force = Vector.mult(force, -1);
		}
    critters[i].applyForce(force);
		// push();
		// angleMode(DEGREES);
		critters[i].applyDirect(width, height); //mouseX, mouseY
		// print("angle of critter: " + critters[i].getAngle());
		// pop();
    critters[i].show();
		
    // Remove the Body from the world and the array
    if (critters[i].checkEdge()) {
      critters[i].removeBody();
      critters.splice(i, 1);
    }
  }
	
	[cx, cy] = calcCentroid(critters);
	push();
	// angleMode(DEGREES);
	let a = atan2(mouseY - cy, mouseX - cx);
	// print("-----------------------------------------");
	// print("eyes angle: " + a);
	let mx1 = cx - 15 + (cos(a)*6); // 0.99*x +0.01*
	let mx2 = cx + 15 + (cos(a)*6); // 0.99*x +0.01*
	let my = cy+ (sin(a)*6); //0.99*y +0.01*
	
	noStroke();
	// face base
	fill(palette[0]);
	rect(cx-30, cy-15, 60, 35, 15);
	//mouth
	fill(6, 32, 46);
	rect(cx-5, cy+10, 10, 5, 5);
	// outter dark eye circle
	fill(6, 32, 46);
	circle(cx-15, cy, 20);
	circle(cx+15, cy, 20);
	//outer white eye circles
	fill(246, 246, 246);
	circle(cx-15, cy, 16);
	circle(cx+15, cy, 16);
	// push();
	
	// pupils
	fill(6, 32, 46);
	circle(mx1, my, 8);
	circle(mx2, my, 8);
	// pop();
	pop();
	
  // // Display all the boundaries
  // for (let i = 0; i < boundaries.length; i++) {
  //   boundaries[i].show();
  // }
  attractor.update(mouseX, mouseY);
	attractor.show();
}

//------------------------------------------------
// add a critter everytime the mouse is pressed, but only one
// at a time
function keyPressed() {
	if (keyCode === LEFT_ARROW) {
    noLoop();
  } else if (keyCode === RIGHT_ARROW) {
    loop();
  } else {
    let currCrit = new Critter(cx + random(-50, 50), cy + random(-50, 50), palette);
    critters.push(currCrit);
	}
}
//-------------------------------------------------
//collision handler
function handleCollisions(event) {
  for (let pair of event.pairs) {
    let bodyA = pair.bodyA;
    let bodyB = pair.bodyB;

    //{!2} When we pull the “user data” object out of the Body object, we have to remind our program that it is a Particle object.  Box2D doesn’t know this.
    let critterA = bodyA.plugin.critter;
    let critterB = bodyB.plugin.critter;
    
    //{!4} Once we have the particles, we can do anything to them.  Here we just call a function that changes their color.
    if (critterA instanceof Critter && critterB instanceof Critter) {
      critterA.change();
      critterB.change();
    }
    
  }
}

