import CONSTANT from './constant.js'
import { Screen } from './screen.js'
import { Snake } from './snake.js'
import { Eye } from './eye.js'

export class Game {
  constructor() {
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.canvas.width = CONSTANT.SCREEN_WIDTH
    this.canvas.height = CONSTANT.SCREEN_HEIGHT
    document.getElementById('game-snake-container').appendChild(this.canvas)

    this.isRunning = true

    this.screen = new Screen(this)
    this.snake = new Snake(this)
    this.eye = new Eye(this)
  }

  loop() {
    this.update()
    this.draw()
    if (this.isRunning) setTimeout(() => this.loop(), 1000 / CONSTANT.GAME_FPS)
  }

  update() {
    this.screen.update()
    this.snake.update()
    this.eye.update()
  }

  clearScreen() {
    this.ctx.fillStyle = CONSTANT.SCREEN_BACKGROUND
    this.ctx.fillRect(0, 0, CONSTANT.SCREEN_WIDTH, CONSTANT.SCREEN_HEIGHT)
  }

  draw() {
    this.clearScreen()
    this.screen.draw()
    this.snake.draw()
    this.eye.draw()
  }
}
