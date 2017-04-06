var planets = [];

function setup() {
	createCanvas(512, 512, WEBGL);
	angleMode(DEGREES)
	noStroke();
	var sun = new Planet(createVector(0,0,0),60);
	planets.push(sun)
	for (var i = 5 - 1; i >= 0; i--) {
		var f = new Planet(createVector(random(100,300),0,0), 30);
		f.init();
		planets.push(f);
	};
	
}

function draw() {
  background(0,0,0);
 // translate(width/2, height/2,0);
  for (var i = planets.length- 1; i >= 0; i--) {
  	planets[i].show();
  	planets[i].update();
  };
  ambientLight(50);
  directionalLight(800, 0, 0, 0.25, 0.25, 0.25);
}


