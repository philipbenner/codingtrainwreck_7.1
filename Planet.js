function Planet (_p, _r){
	this.pos = createVector(_p.x, _p.y, _p.z)
	this.r = _r || 60;

	this.rotation = random(360);
	this.rotationSpeed = 0.01;
	this.moons = [];
	this.img;
	
	this.preload = function (){
		
	}
	this.init = function (){
		//this.img = loadImage("stain.jpg");
		if (this.r == 30){
			this.m = random(3)+1;
			for (var i = this.m - 1; i >= 0; i--) {
				var f = new Planet(createVector(random(40,75),0), random(10,20));
				this.moons.push(f);
			};
		}
	}

	this.show = function (){
		push();
		//texture(this.img)
		fill(255,0,0);
		if(this.r < 60){
			rotateZ(this.rotation/4);
			rotateY((this.rotation/4)*3)
			rotateX(this.rotation/2)
		}
		specularMaterial(250);
		ambientMaterial(150);
		translate(this.pos.x,this.pos.y,0);
		//ellipse(0,0, this.r, this.r);
		//box(this.r,this.r,this.r)
		sphere(this.r)
		if (this.r == 30){
		for (var i = this.moons.length- 1; i >= 0; i--) {
		  	this.moons[i].show();
		  	this.moons[i].update();
		  };
		}
		/*ambientLight(100);
  pointLight(250, 250, 250, 100, 100, 0);
 ambientMaterial(250);*/
		pop();

	}
	this.update = function (){
		if(this.r < 60){
			this.rotation += this.rotationSpeed;
		}
	}
}