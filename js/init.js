
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
  enemy.update(ctx)

  platforms.forEach(platform => {
    platform.draw(ctx)
  });

  playerAction()
}

animate()