
const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

// Functions:
function setCanvasDimensions() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}

function animate(){
  requestAnimationFrame(animate)
  setCanvasDimensions()
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas before render

  player.update(ctx)
  drawPlatforms()

  if (keys.w.pressed && lastKey === 'w') {
    player.jump()
  } else if (keys.a.pressed && lastKey === 'a') {
    if (player.position.x <= canvas.width * 0.3) {
      platform.position.x += player.speed
    } else player.position.x -= player.speed
  } else if (keys.s.pressed && lastKey === 's') {
      // player.position.y -= player.speed
  } else if (keys.d.pressed && lastKey === 'd') {
    if (player.position.x >= canvas.width * 0.40) {
      platform.position.x -= player.speed
    } else player.position.x += player.speed
  }

}

animate()