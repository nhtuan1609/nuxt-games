import CONSTANT from './constant.js'
export class Eye {
  constructor(game) {
    this.game = game
    this.leftEye = null
    this.rightEye = null
    this.insideLeftEye = null
    this.insideRightEye = null
  }

  calculateCoordinate(origin, angle, distance) {
    return {
      x: origin.x + Math.cos(angle) * distance,
      y: origin.y + Math.sin(angle) * distance,
    }
  }

  update() {
    const center = this.game.snake.center
    const headAngle = this.game.snake.snakeAngles[CONSTANT.SNAKE_ANGLE_DELAY]
    const mouseAngle = this.game.snake.snakeAngles[0]

    this.leftEye = this.calculateCoordinate(
      center,
      headAngle - CONSTANT.EYE_ANGLE,
      CONSTANT.EYE_DISTANCE
    )

    this.rightEye = this.calculateCoordinate(
      center,
      headAngle + CONSTANT.EYE_ANGLE,
      CONSTANT.EYE_DISTANCE
    )

    this.insideLeftEye = this.calculateCoordinate(
      this.leftEye,
      mouseAngle,
      CONSTANT.EYE_INSIDE_DISTANCE
    )

    this.insideRightEye = this.calculateCoordinate(
      this.rightEye,
      mouseAngle,
      CONSTANT.EYE_INSIDE_DISTANCE
    )
  }

  draw() {
    this.game.screen.drawCircle(this.leftEye, 'snakeEye')
    this.game.screen.drawCircle(this.rightEye, 'snakeEye')
    this.game.screen.drawCircle(this.insideLeftEye, 'snakeInsideEye')
    this.game.screen.drawCircle(this.insideRightEye, 'snakeInsideEye')
  }
}
