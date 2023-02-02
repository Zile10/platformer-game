class Enemy {
  constructor(config) {
      this.position = config.position;
      this.image = new Image();
      this.image.src = config.imageSrc;
  }
}
