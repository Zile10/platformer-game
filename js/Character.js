const gravity = 0.98
class Character {
  constructor(config) {
    this.name = config.name
    this.position = config.position
    this.speed = config.speed || 5
    this.jumpSpeed = config.jumpSpeed || 20
    this.dimensions = config.dimensions

    this.image = new Image();
    this.image.src = config.imageSrc;
  }

  render(context) {
    context.drawImage(this.image, this.position.x, this.position.y);
  }
  draw(ctx){
    ctx.fillStyle = 'crimson';
    ctx.fillRect(
      this.position.x, 
      this.position.y, 
      this.dimensions.width, 
      this.dimensions.height
    );
  }

  update(){
    this.draw()
    if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius + this.dx < 0) {
        this.dx = -this.dx  //* 0.9
    }
    if (this.position.y + this.dimensions.height + this.dy > canvas.height || this.position.y - this.dimensions.height + this.dy < 0) {
        this.dy = -this.dy //* 0.9
        this.dx = this.dx  //* 0.98
    } else {
        this.dy += gravity
    }
    this.x += this.dx
    this.y += this.dy
  }
}

// class Player extends Character {

// }