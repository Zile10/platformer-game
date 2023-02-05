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
            // keys.w.pressed = true
            // lastKey = 'w'
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
