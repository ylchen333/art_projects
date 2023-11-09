// imported functions

//------------------------------
// golan: https://editor.p5js.org/golan/sketches/gL43b7cTn
function drawVerticesBezier(verts, tightness){ //verts is list of particles, must extract x and y position from particle
  var N = verts.length; 
  beginShape(); 
  var p1 = getVertexPoint(verts, 0, 0, tightness);
  vertex(p1.x,p1.y);
  for (var i=0; i<N; i++){
    var p2 = getVertexPoint(verts, i,    1, tightness);
    var p3 = getVertexPoint(verts, i+1, -1, tightness);
    var p4 = getVertexPoint(verts, i+1,  0, tightness);
    bezierVertex(p2.x,p2.y, p3.x,p3.y, p4.x,p4.y);
  }
  endShape(CLOSE);
}


//------------------------------
// golan: https://editor.p5js.org/golan/sketches/gL43b7cTn
function getVertexPoint(verts, index, side, tightness){
  var N = verts.length; 
  if (side === 0){
		let [x, y] = verts[index%N].getCoord();
		let v = createVector(x, y);
    return (v); 
  } else {
    
    // Get the current vertex, and its neighbors
		let [vbx, vby] = verts[index%N].getCoord();
		let [vax, vay] = verts[(index+N-1)%N].getCoord();
		let [vcx, vcy] = verts[(index+N+1)%N].getCoord();
		
    var vB = createVector(vbx, vby);
    var vA = createVector(vax, vay);
    var vC = createVector(vcx, vcy);
    
    // Compute delta vectors from neigbors
    var dAB = p5.Vector.sub(vA,vB); 
    var dCB = p5.Vector.sub(vC,vB); 
    var dAB1 = dAB.copy().normalize(); 
    var dCB1 = dCB.copy().normalize(); 
    
    // Compute perpendicular and tangent vectors
    var vPerp = p5.Vector.add(dAB1, dCB1).normalize();
    var vTan = createVector(vPerp.y, 0-vPerp.x);
    var vCros = p5.Vector.cross(dAB1, dCB1);
    
    // Compute control point
    var len = tightness;
    if (side === 1){
      len *= dCB.mag(); 
      len *= (vCros.z > 0) ? -1:1;
    } else { // e.g. if side === -1
      len *= dAB.mag();
      len *= (vCros.z < 0) ? -1:1;
    }
    return(vB.copy().add(vTan.mult(len)));
  }
}


//-------------------------------------------------
//centroid point golan modified by me: https://editor.p5js.org/golan/sketches/584dwBegr
function calcCentroid(myHull) { //myHull is a list of particles
	let cx = 0; 
  let cy = 0;
  for (let i = 0; i < myHull.length; i++) {
		let [hullX, hullY] = myHull[i].getCoord();
    cx += hullX; 
    cy += hullY;
  }
  cx /= myHull.length;
  cy /= myHull.length;
	return [cx, cy];
}

//-------------------------------------------------
//average color
function calcCol(myHull) { //myHull is a list of particles
	let coooloor = 0; 
  for (let i = 0; i < myHull.length; i++) {
		let currCol = myHull[i].getCol();
    coooloor += currCol; 
    
  }
  coooloor /= myHull.length;
	return coooloor;
}

//----------------------------------------------------
//convex hull filter helper
function filterPoints(p, mid, maxDist) {
	// let N = pointsArray.length;
	// extract x and y coord from the current point
	let finRes = [];
	let [midX, midY] = mid;
	for (let i = 0; i < p.length; i ++){
		let [x, y] = p[i].getCoord();
		let distanceBetw = dist(x, y, midX, midY);
		if (distanceBetw < maxDist){
			finRes.push(p[i]);
		}
	}
	return finRes;
}

//----------------------------------------------------
//convex hull function golan: https://editor.p5js.org/golan/sketches/584dwBegr
/*
 * Convex hull algorithm - Library
 * Copyright (c) 2021 Project Nayuki
 * GNU General Public License v3.0+
 * https://www.nayuki.io/page/convex-hull-algorithm
 * https://www.nayuki.io/res/convex-hull-algorithm/convex-hull.js
 */
function makeHull(points) { //myHull is a list of particles
  let newPoints = points.slice();
  newPoints.sort(POINT_COMPARATOR);
	// filter out outliers
	let [midX, midY] = newPoints[int(newPoints.length/2)].getCoord()
	// print(midX +", " + midY);
	// print("length of newPOints before -------> "+ newPoints.length);
	// print("mid^_________*****_________*****________****_______****");
	// if (newPoints.length > 20) {
	// 	newPoints = filterPoints(newPoints, [midX, midY], 100);
	// }
	// print("length of newPOints AFTER -------> "+ newPoints.length);

  return makeHullPresorted(newPoints);
}

function makeHullPresorted(points) {
	// points.forEach(function(entry) {
	// 	let [x, y] = entry.getCoord()
	// 	print(x +", " + y);
	// 	print("----*****-----*****----****-----****");
	// });
	// noLoop();
  if (points.length <= 1) return points.slice();
  let upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
		let [px, py] = p.getCoord(); //get x and y of particle p
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r = upperHull[upperHull.length - 2];
			let [qx, qy] = q.getCoord(); //get x and y of particle q
			let [rx, ry] = r.getCoord(); //get x and y of particle r
			// print("while upperHull-------");
			// print("px, py: "+px+", "+py);
			// print("qx, qy: "+qx+", "+qy);
			// print("rx, ry: "+rx+", "+ry);
      if ((qx - rx) * (py - ry) >= (qy - ry) * (px - rx)) {
        upperHull.pop();
      } else break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
	
  let lowerHull = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i];
		let [px, py] = p.getCoord();
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r = lowerHull[lowerHull.length - 2];
			let [qx, qy] = q.getCoord(); //get x and y of particle q
			let [rx, ry] = r.getCoord(); //get x and y of particle r
			// print("while lowerHull-------");
			// print("px, py: "+px+", "+py);
			// print("qx, qy: "+qx+", "+qy);
			// print("rx, ry: "+rx+", "+ry);
      if ((qx - rx) * (py - ry) >= (qy - ry) * (px - rx)) {
        lowerHull.pop();
      } else break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (
    upperHull.length == 1 &&
    lowerHull.length == 1 &&
    upperHull[0].getCoord() == lowerHull[0].getCoord()
  ) {
    return upperHull;
  } else return upperHull.concat(lowerHull);
}

function POINT_COMPARATOR(a, b) {
	let [ax, ay] = a.getCoord();
	let [bx, by] = b.getCoord();
  if (ax < bx) {
    return -1;
  } else if (ax > bx) {
    return +1;
  } else if (ay < by) {
    return -1;
  } else if (ay > by) {
    return +1;
  } else return 0;
}

//----------------------------------------------------
// init vertices
function initVertices(N){
  let vertices = [];
  // var N = 10;
  for (var i=0; i<N; i++){
    var t = map(i,0, N, 0, TWO_PI) + random(-1,1)*TWO_PI*0.05; 
    var r = random(120,width/4); 
    var x = width/2 + r * cos(t);
    var y = height/2 + r * sin(t);
    var p = createVector(x,y); 
    vertices.push(p);
  }
	return vertices;
}

//---------------------------------------------------

function drawVerticesBezierVERT(verts, tightness){
  var N = verts.length; 
  beginShape(); 
  var p1 = getVertexPointVERT(verts, 0, 0, tightness);
  vertex(p1.x,p1.y);
  for (var i=0; i<N; i++){
    var p2 = getVertexPointVERT(verts, i,    1, tightness);
    var p3 = getVertexPointVERT(verts, i+1, -1, tightness);
    var p4 = getVertexPointVERT(verts, i+1,  0, tightness);
    bezierVertex(p2.x,p2.y, p3.x,p3.y, p4.x,p4.y);
  }
  endShape(CLOSE);
}


//------------------------------
function getVertexPointVERT(verts, index, side, tightness){
  var N = verts.length; 
  if (side === 0){
    return (verts[index%N]); 
  } else {
    
    // Get the current vertex, and its neighbors
    var vB = verts[index%N];
    var vA = verts[(index+N-1)%N];
    var vC = verts[(index+N+1)%N];
    
    // Compute delta vectors from neigbors
    var dAB = p5.Vector.sub(vA,vB); 
    var dCB = p5.Vector.sub(vC,vB); 
    var dAB1 = dAB.copy().normalize(); 
    var dCB1 = dCB.copy().normalize(); 
    
    // Compute perpendicular and tangent vectors
    var vPerp = p5.Vector.add(dAB1, dCB1).normalize();
    var vTan = createVector(vPerp.y, 0-vPerp.x);
    var vCros = p5.Vector.cross(dAB1, dCB1);
    
    // Compute control point
    var len = tightness;
    if (side === 1){
      len *= dCB.mag(); 
      len *= (vCros.z > 0) ? -1:1;
    } else { // e.g. if side === -1
      len *= dAB.mag();
      len *= (vCros.z < 0) ? -1:1;
    }
    return(vB.copy().add(vTan.mult(len)));
  }
}

