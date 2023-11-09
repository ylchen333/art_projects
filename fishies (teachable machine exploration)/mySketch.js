// Webcam Image Classification using a pre-trained customized model and p5.js
// This example uses p5 preload function to create the classifier.
//
// 1. First: train a neural net "image model" in Teachable Machine:
//    https://teachablemachine.withgoogle.com/train/image
// 2. In Teachable Machine: Export the model; "Upload" (to Google's cloud storage).
// 3. Copy the Teachable Machine model link into the variable 'imageModelURL' below.

// Model URL, from Teachable Machine:
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/lehW0sVIp/';
let classifier; // variable to hold the Classifier
let label = ""; // To store the classification
let mode = "";

// Camera stuff
let video;
let flippedVideo;

// audio stuff
let songs = [];
let derp;
let derp1;
let derp2;
let derp3;
let derp4;
let derp5;
let derp6;
let curr;
let isFish = false;
let wasFish = false;
let isPlaying = false;

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
	// songs = [];
	derp = loadSound('Super Bork World.mp3');
	derp1 = loadSound('wavedash.ppt.mp3');
	derp2 = loadSound('Mio mao  sped up.mp3');
	derp3 = loadSound('the cat from ipanema.mp3');
	derp4 = loadSound('sans..mp3');
	derp5 = loadSound('Hurrdurrderp.mp3');
	derp6 = loadSound('Super Mario RPG - Victory Theme  - Music HD.mp3');
	
}

function setup() {
  createCanvas(640, 500);
  // Create the video
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
	
	// load audio
	// for (let i = 0; i < songs.length; i ++ ) {
	// derp.play();
	// print("derp play");
	songs[0] = derp;
	songs[1] = derp1;
	songs[2] = derp2;
	songs[3] = derp3;
	songs[4] = derp4;
	songs[5] = derp5;
	songs[6] = derp6;
	// songs[1] = derp1;
	curr = floor(random(songs.length));
	// }
}

function draw() {
  background(0);
  image(flippedVideo, 0, 0, 640,480);

  // Draw the label
  // fill(255);
  // textSize(16);
  // textAlign(CENTER);
  // text(label, width / 2, height - 4);
	
	// music stuff
	
	if (mode == "fisheye" ) {
		print("in fisheye");
		isFish = true;
		wasFish = true;
		// curr.play();
	} else {
		wasFish = false;
		isFish = false;
	}
	
	
	// print("curr song is number " + curr);
	if (isFish) {
    // if (wasFish) {
      if (!isPlaying) {
        isPlaying = true;
				// print("in play sound if statement");
				// derp.loop();
				curr = floor(random(songs.length));
				songs[curr].loop();
				songs[curr].setVolume(0.5);
      }
      // isStop = false;
      // musicControl();
			
    // }
    // wasHovered = false;
  } else {
		isPlaying = false;
		// print("stop sound");
    songs[curr].stop();
  } 
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are ordered by confidence; the 0'th item is the best guess.
  label = results[0].label + "  (" + nf(results[0].confidence, 1,3) + ")";
	mode = results[0].label;
  // Now that we're done, call Classify again!
  classifyVideo();
}


