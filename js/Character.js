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
    this.canWalk = false


    // this.image = new Image();
    // this.image.src = config.imageSrc;
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

  gravitate() {
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
  }

  testWalls() {
    this.canWalk = platforms.some(platform =>
      this.position.x - this.dx > platform.position.x
      && this.position.x + this.width + this.dx < platform.position.x + platform.width
      && this.position.y + this.height + this.dy > platform.position.y 
      && this.position.y + this.height + this.dy < platform.position.y + platform.height 
    );

    if (!this.canWalk) {
      this.dx = -this.dx
    }
  }

  move(){
    this.position.x += this.dx
    this.position.y += this.dy
  }

  jump() {
    this.isJumping = true
    this.isJumping
    this.dy -= this.jumpSpeed
  }

}



// class Player extends Character {

// }