class Character {
  constructor(config) {
    this.name = config.name
    this.position = config.postion
    this.speed = config.speed || 5
    this.jumpSpeed = config.jumpSpeed || 20

    this.image = new Image();
    this.image.src = config.imageSrc;
  }

  moveLeft(){
    this.position.x -= this.speed
  }
  jump(){
    this.position.y += this.jumpSpeed
  }
  moveRight(){
    this.position.x += this.speed
  }

  render(context) {
    context.drawImage(this.image, this.position.x, this.position.y);
  }
}

class Player extends Character {

}