const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


// Instantiations:

let overworld = new Map({
  bakcground: '',
  middleground: '',
  platform: '',
  foreground: '',
})

let player = new Character({
  name: 'INTJ'
})

// Event Listeners:

document.addEventListener('keydown', event => {
  switch(event.key.toLowerCase()) {
    case 'a':
      player.moveLeft();
      break;
    case 'w':
      player.jump();
      break;
    case 'd':
      player.moveRight();
      break;
  }
});



// Functions:
function setCanvasDimensions() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}

function animate(){
  requestAnimationFrame(animate)
  setCanvasDimensions()
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas before render
  player.render(ctx);
}

animate()