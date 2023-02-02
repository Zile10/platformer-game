class Map {
  constructor(config) {
    this.bakcground = config.bakcground;
    this.middleground = config.middleground;
    this.platform = config.platform;
    this.foreground = config.foreground;
    this.platforms = [];
    this.enemies = [];
  }

  generatePlatforms(levelData) {
    levelData.platforms.forEach(platform => {
      this.platforms.push(new Platform(platform.x, platform.y, platform.width, platform.height));
    });
  }

  generateEnemies(levelData) {
    levelData.enemies.forEach(enemy => {
      this.enemies.push(new Enemy(enemy.x, enemy.y, enemy.imageSrc));
    });
  }
}