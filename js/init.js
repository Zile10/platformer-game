const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const player = new Character({
  position: {
    x: 300,
    y: 300,
  },
  dimensions: {
    width: 50,
    height: 100
  },
  speed: 5
});

// let player = new Character()

const keys = {
  w: {
      pressed: false,
  },
  a: {
      pressed: false,
  },
  s: {
      pressed: false,
  },
  d: {
      pressed: false,
  },
}

let lastKey = ''
addEventListener('keydown', (e) => {
    switch (e.key.toLowerCase()) {
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
            break;
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break;
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break;
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break;
    
        default:
            break;
    }
})

addEventListener('keyup', (e) => {
    switch (e.key.toLowerCase()) {
        case 'w':
            keys.w.pressed = false
            break;
        case 'a':
            keys.a.pressed = false
            break;
        case 's':
            keys.s.pressed = false
            break;
        case 'd':
            keys.d.pressed = false
            break;
    
        default:
            break;
    }
})

// Functions:
function setCanvasDimensions() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}

function animate(){
  requestAnimationFrame(animate)
  setCanvasDimensions()
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas before render
  // player.render(ctx);
  player.draw()

  if (keys.w.pressed && lastKey === 'w') {
    // player.position.y += player.speed
  } else if (keys.a.pressed && lastKey === 'a') {
      player.position.x -= player.speed
  } else if (keys.s.pressed && lastKey === 's') {
      // player.position.y -= player.speed
  } else if (keys.d.pressed && lastKey === 'd') {
      player.position.x += player.speed
  }

}

animate()