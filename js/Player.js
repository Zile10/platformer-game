class Player extends Character {
  constructor(config) {
    super(config);
    
  }


  update(ctx){
    this.draw(ctx)
    this.gravitate()
    this.testWalls()
    this.move()
  }

}

const player = new Player({
  position: {
    x: 300,
    y: 300,
  },
  width: 50,
  height: 100,
  speed: 5
});

