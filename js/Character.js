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

  detectPlatform(direction) {
    switch (direction) {
      case 'left':
        return platforms.some(platform => {
          return this.position.x + this.width > platform.position.x 
          && this.position.x - this.speed < platform.position.x + platform.width 
          && this.position.y + this.height + this.dy - 20 > platform.position.y
          && this.position.y + this.height + this.dy - 20 < platform.position.y + platform.height
        })
        break;
      case 'right':
        return platforms.some(platform => {
          return this.position.x + this.width + this.speed > platform.position.x 
          && this.position.x < platform.position.x + platform.width 
          && this.position.y + this.height + this.dy - 20 > platform.position.y
          && this.position.y + this.height + this.dy - 20 < platform.position.y + platform.height
        })
        break;
      case 'down':
        return platforms.some(platform => {
          return this.position.x + this.width + this.dx > platform.position.x 
          && this.position.x + this.dx < platform.position.x + platform.width 
          && this.position.y + this.height + this.dy > platform.position.y
          && this.position.y + this.height + this.dy < platform.position.y + platform.height
        })
        break;
      default:
        break;
    }
  }

  moveLeft() {
    if (!this.detectPlatform('left')) {
      this.dx = -this.speed
    }
  }
  moveRight() {
    if (!this.detectPlatform('right')) {
      this.dx = this.speed
    }
  }
  jump() {
    this.isJumping = true
    this.dy = -this.jumpSpeed
  }

  update(ctx){
    this.draw(ctx)

    if ((this.position.x < 0.35 * canvas.width && this.dx < 0) || (this.position.x + this.width > 0.5 * canvas.width && this.dx > 0)) {
      platforms.forEach(platform => {
        platform.position.x -= this.dx
      });
      enemy.position.x -= this.dx
    } else this.position.x += this.dx
    this.position.y += this.dy

    if (this.detectPlatform('down')) {
      if (this.dy > 0) {
        this.dy = 0
      }
    } else this.dy += gravity;

    this.dx = 0

    if (this.dy == 0) {
      this.isJumping = false
    }
  }
}