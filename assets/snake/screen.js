import CONSTANT from './constant.js'
export class Screen {
  constructor(game) {
    this.game = game
    this.top = 0
    this.right = 0
    this.bottom = 0
    this.left = 0
  }

  update() {
    this.top = this.game.snake.center.y - CONSTANT.SCREEN_HEIGHT / 2
    this.right = this.game.snake.center.x + CONSTANT.SCREEN_WIDTH / 2
    this.bottom = this.game.snake.center.y + CONSTANT.SCREEN_HEIGHT / 2
    this.left = this.game.snake.center.x - CONSTANT.SCREEN_WIDTH / 2
  }

  drawLine(startPoint, endPoint) {
    this.game.ctx.stroke.strokeStyle = CONSTANT.GRID_COLOR
    this.game.ctx.lineWidth = CONSTANT.GRID_WIDTH
    this.game.ctx.beginPath()
    this.game.ctx.moveTo(startPoint.x, startPoint.y)
    this.game.ctx.lineTo(endPoint.x, endPoint.y)
    this.game.ctx.stroke()
  }

  drawCircle(position, styleName) {
    const styles = {}
    styles.snakeBody = {
      color: '#f9a825',
      borderColor: 'black',
      diameter: 20,
    }
    styles.snakeHead = {
      color: '#f9a825',
      borderColor: 'black',
      diameter: 24,
    }
    styles.snakeEye = {
      color: 'white',
      borderColor: 'black',
      diameter: 14,
    }
    styles.snakeInsideEye = {
      color: 'black',
      borderColor: 'black',
      diameter: 6,
    }

    const styleProps = styles[styleName]
    this.game.ctx.beginPath()
    this.game.ctx.arc(
      position.x - this.left,
      position.y - this.top,
      styleProps.diameter,
      0,
      2 * Math.PI
    )
    this.game.ctx.fillStyle = styleProps.color
    this.game.ctx.fill()
    this.game.ctx.strokeStyle = styleProps.borderColor
    this.game.ctx.stroke()
  }

  draw() {
    // draw vertical lines
    const offsetX = CONSTANT.GRID_SIZE - (this.left % CONSTANT.GRID_SIZE)
    let totalX = 0
    while (totalX < CONSTANT.SCREEN_WIDTH) {
      const startPoint = { x: totalX + offsetX, y: 0 }
      const endPoint = { x: totalX + offsetX, y: CONSTANT.SCREEN_HEIGHT }
      this.drawLine(startPoint, endPoint)
      totalX += CONSTANT.GRID_SIZE
    }

    // draw horizontal lines
    const offsetY = CONSTANT.GRID_SIZE - (this.top % CONSTANT.GRID_SIZE)
    let totalY = 0
    while (totalY < CONSTANT.SCREEN_HEIGHT) {
      const startPoint = { x: 0, y: totalY + offsetY }
      const endPoint = { x: CONSTANT.SCREEN_WIDTH, y: totalY + offsetY }
      this.drawLine(startPoint, endPoint)
      totalY += CONSTANT.GRID_SIZE
    }
  }
}
