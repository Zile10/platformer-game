const platform = {
  position: {
    x: 200,
    y: 500
  },
  width: 1000,
  height: 25,
}

const platform2 = {
  position: {
    x: 225,
    y: 1500
  },
  width: 800,
  height: 25,
}

const platforms = [
  {
    position: {
      x: 200,
      y: 500
    },
    width: 1000,
    height: 25,
  },
  {
    position: {
      x: 225,
      y: 1500
    },
    width: 800,
    height: 25,
  }

]

// function drawPlatforms() {
//   ctx.fillStyle = 'darkcyan'
//   platforms.forEach(platform => {
//     ctx.fillRect(platform.position.x, platform.position.y, platform.width, platform.height)
//   })
// }

function drawPlatforms() {
  ctx.fillStyle = 'darkcyan'
  ctx.fillRect(platform.position.x, platform.position.y, platform.width, platform.height)
}

class Platform {
  constructor(config) {
    this.position.x = config.x;
    this.position.y = config.y;
    this.width = config.width;
    this.height = config.height;
  }

  draw(){
    ctx.fillStyle = 'darkcyan'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}