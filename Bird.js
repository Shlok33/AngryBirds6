class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.trajectry = []

  }

  display() {

    super.display();

    if(this.body.position.x > 200 && this.body.velocity.x > 10){
      var position = [this.body.position.x,this.body.position.y];
      this.trajectry.push(position);
    }

    for(var i = 0 ; i < this.trajectry.length ; i ++){

      image(this.smokeimage, this.trajectry[i][0], this.trajectry [i][1]);

    }

  }
}
