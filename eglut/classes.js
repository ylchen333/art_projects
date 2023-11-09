//------------------------------------------------------------
// arbitrary box class
class Critter {
  constructor(x, y, palette) {
    this.w = random(4, 18);
    this.h = this.w + random(2, 6);
		this.palette = palette;
		this.col = random(this.palette);
		this.growth = random(-2, 2);
		this.a = 0;
		
    let options = { restitution: 0.6 };
		
    this.body = Bodies.circle(x, y, this.h , options);
    Body.setVelocity(this.body, Vector.create(random(-5, 5), random(-5, 5)));
    // Body.setAngularVelocity(this.body, 0.1);
		
		this.body.plugin.critter = this;
		
    Composite.add(engine.world, this.body);
  }
	getAngle() {
		return this.a;
	}
	getCoord() {
		// print("-----------------------------------in getCoord");
		// print("this.body.position.x, this.body.position.y: " + this.body.position.x+", "+ this.body.position.y);
		return [this.body.position.x, this.body.position.y];
	}
	
	// Change color when collision
  change() {
    this.col = random(this.palette);
		if (this.w< 22 && this.w > 0) {this.w += this.growth;}
		else {this.w = 22;}
  }

  // Drawing the box
  show() {
    let pos = this.body.position;
    // let a = this.body.angle;
		// print("the radius is "+this.radius);
    // rectMode(CENTER);
    fill(this.col);
    noStroke();
    push();
		blendMode(MULTIPLY);
		// angleMode(DEGREES);
    translate(pos.x, pos.y);
    rotate(this.a);
    ellipse(0, 0, this.w, this.h);
    pop();
  }
  
  checkEdge() {
    return (this.body.position.y > height || 
						this.body.position.x > width ||
					 	this.body.position.y < 0 ||
					 	this.body.position.x < 0);
  }

  // This function removes a body from the Matter.js world.
  removeBody() {
    Composite.remove(engine.world, this.body);
  }
	
	applyForce(force) { // force is a vector
    Body.applyForce(this.body, this.body.position, force);
		// Body.applyForce(this.body, this.body.angle, force);
  }
	
	applyDirect(w, h) {
		push();
		// angleMode(DEGREES);
		this.a = atan(Matter.Body.getVelocity(this.body).y, Matter.Body.getVelocity(this.body).x);
		Body.rotate(this.body, this.a)
		// print(" velocity y: " + Matter.Body.getVelocity(this.body).y*h);
		// print(" velocity x: " + Matter.Body.getVelocity(this.body).x*w);
		// print(" direction this.a: " + this.a);
		// print(" direction tangent: " + tan());
		pop();
	}
}

//--------------------------------------------------------
// An object for a draggable attractive body in our world

class Attractor {
  constructor(x, y) {
    this.radius = 32;
    this.body = Bodies.circle(x, y, this.radius, { isStatic: true });
    Composite.add(engine.world, this.body);
  }

  attract(mover) {
    let force = Vector.sub(this.body.position, mover.body.position);
    let distance = Vector.magnitude(force);
    distance = constrain(distance, 5, 25);

    let G = 0.08;
    let strength = (G * 1 * mover.body.mass) / (distance * distance);
    force = Vector.normalise(force);
    force = Vector.mult(force, strength);
    return force;
  }

  show() {
    // fill(0);
		fill(200);
    // stroke(200);
    // strokeWeight(5);
		noStroke();
    push();
		blendMode(OVERLAY);
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    circle(0, 0, this.radius);
    pop();
  }
	
	update(x, y) {
		this.body.position.x = this.body.position.x * 0.9 + 0.1*x;
		this.body.position.y = this.body.position.y *0.9 + 0.1*y; 
	}
}


//--------------------------------------------------------
class Boundary {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    let options = { isStatic: true };
    this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
    Composite.add(engine.world, this.body);
  }
  
  // Drawing the box
  show() {
    rectMode(CENTER);
    fill(127);
    stroke(0);
    strokeWeight(2);    
    rect(this.x, this.y, this.w, this.h);
  }
}