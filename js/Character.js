const gravity = 0.98
class Character {
  constructor(config) {
    this.name = config.name
    this.position = config.position
    this.speed = config.speed || 5
    this.jumpSpeed = config.jumpSpeed || 15
    this.width = config.width
    this.height = config.height
    this.dy = config.dy || 0
    this.dx = config.dx || 0
    this.isJumping = false
    this.canStand = 0

    // this.image = new Image();
    // this.image.src = config.imageSrc;
  }

  jump() {
    this.isJumping = true
    this.isJumping
    this.dy -= this.jumpSpeed
  }

  render(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y);
  }
  draw(ctx){
    ctx.fillStyle = 'crimson';
    ctx.fillRect(
      this.position.x, 
      this.position.y, 
      this.width, 
      this.height
    );
  }

  update(ctx){
    this.draw(ctx)

    if (this.isJumping && this.dy == 0) {
      this.isJumping = false
    }
    this.canStand = platforms.some(platform => 
      this.position.y + this.height + this.dy > platform.position.y 
      && this.position.y + this.height + this.dy < platform.position.y + platform.height 
      && this.position.x + this.dx < platform.position.x + platform.width 
      && this.position.x + this.width + this.dx > platform.position.x
    );
    if (this.canStand) {
      this.dy = 0
    } else {
      this.dy += gravity
    }
    
    this.position.y += this.dy
  }
}


const player = new Character({
  position: {
    x: 300,
    y: 300,
  },
  width: 50,
  height: 100,
  speed: 5
});


// class Player extends Character {

// }