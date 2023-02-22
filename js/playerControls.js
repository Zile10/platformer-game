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
            if (!player.isJumping) {
              player.jump()
            }
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

function playerAction() {
    if (keys.w.pressed && lastKey === 'w') {
        player.jump()
    } else if (keys.a.pressed && lastKey === 'a') {
        player.moveLeft()
    } else if (keys.s.pressed && lastKey === 's') {
        // player.position.y -= player.speed
    } else if (keys.d.pressed && lastKey === 'd') {
        player.moveRight()
    }
}

// if (player.position.x >= canvas.width * 0.40) {
//   player.dx = -player.speed
//   platforms.forEach(platform => {
//   platform.position.x -= player.dx     
//   });
//   enemy.position.x -= player.speed
// }


//   if (player.position.x <= canvas.width * 0.3) {
//     player.dx = player.speed
//     platforms.forEach(platform => {
//       platform.position.x += player.dx
//     })
//     enemy.position.x += player.speed
//   }