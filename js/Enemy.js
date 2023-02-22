class Enemy extends Character {
  constructor(config) {
    super(config); 
  }
}

const enemy = new Enemy({
  position: {
    x: 600,
    y: 300,
  },
  width: 50,
  height: 100,
  speed: 5
});