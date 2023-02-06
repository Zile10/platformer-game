class Platform {
  constructor(config) {
    this.position = config.position
    this.width = config.width;
    this.height = config.height;
  }

  draw(ctx){
    ctx.fillStyle = 'darkcyan'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

const platforms = []

const platform0 = new Platform({
  position: {
    x: -800,
    y: 475
  },
  width: 1000,
  height: 25,
})
const platform1 = new Platform({
  position: {
    x: 200,
    y: 500
  },
  width: 1000,
  height: 25,
})
const platform2 = new Platform({
  position: {
    x: 1200,
    y: 525
  },
  width: 800,
  height: 25,
})
const platform3 = new Platform({
  position: {
    x: 2000,
    y: 500
  },
  width: 1000,
  height: 25,
})

platforms.push(platform0)
platforms.push(platform1)
platforms.push(platform2)
platforms.push(platform3)
