import CONSTANT from './constant.js'
export class Snake {
  constructor(game) {
    this.game = game
    this.center = { x: CONSTANT.GAME_WIDTH / 2, y: CONSTANT.GAME_HEIGHT / 2 }
    this.angle = 0
    this.snakeCoordinates = []
    this.snakeAngles = []
    this.mousePosition = {
      x: CONSTANT.SCREEN_WIDTH / 2,
      y: CONSTANT.SCREEN_HEIGHT / 2,
    }
    this.listenMouseEvent()
    this.createDefaultSnake()
  }

  listenMouseEvent() {
    this.game.canvas.addEventListener('mousemove', (event) => {
      const rect = this.game.canvas.getBoundingClientRect()
      this.mousePosition = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      }
    })
  }

  createDefaultSnake() {
    for (let i = 0; i < CONSTANT.SNAKE_DEFAULT_LENGTH; i += 1) {
      this.snakeAngles.push(this.angle)
      this.snakeCoordinates.push({
        x: this.center.x - i * CONSTANT.SNAKE_SPEED,
        y: this.center.y,
      })
    }
  }

  updateAngles() {
    const newAngle = Math.atan2(
      this.mousePosition.y - CONSTANT.SCREEN_HEIGHT / 2,
      this.mousePosition.x - CONSTANT.SCREEN_WIDTH / 2
    )
    const diffAngle = newAngle - this.angle
    if (Math.abs(diffAngle) < CONSTANT.SNAKE_MAX_ANGLE) {
      this.angle += diffAngle
    } else if (Math.abs(diffAngle) >= Math.PI) {
      this.angle -= CONSTANT.SNAKE_MAX_ANGLE * Math.sign(diffAngle)
    } else {
      this.angle += CONSTANT.SNAKE_MAX_ANGLE * Math.sign(diffAngle)
    }

    if (this.angle > Math.PI) {
      this.angle -= Math.PI * 2
    }

    if (this.angle < -Math.PI) {
      this.angle += Math.PI * 2
    }

    this.snakeAngles.pop()
    this.snakeAngles.unshift(this.angle)
  }

  updateCoordinates() {
    this.center.x +=
      Math.cos(this.snakeAngles[CONSTANT.SNAKE_ANGLE_DELAY]) *
      CONSTANT.SNAKE_SPEED
    this.center.y +=
      Math.sin(this.snakeAngles[CONSTANT.SNAKE_ANGLE_DELAY]) *
      CONSTANT.SNAKE_SPEED

    this.snakeCoordinates.pop()
    this.snakeCoordinates.unshift({ x: this.center.x, y: this.center.y })
  }

  update() {
    this.updateAngles()
    this.updateCoordinates()
  }

  draw() {
    for (let i = this.snakeCoordinates.length - 1; i >= 0; i -= 1) {
      if (i % 3 === 0) {
        this.game.screen.drawCircle(this.snakeCoordinates[i], 'snakeBody')
      }
    }

    this.game.screen.drawCircle(this.snakeCoordinates[0], 'snakeHead')
  }
}
