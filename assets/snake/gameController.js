import { Game } from './game.js'

export class GameController {
  constructor() {
    this.game = new Game()
  }

  startSnakeGame() {
    this.game.isRunning = true
    this.game.loop()
  }

  stopSnakeGame() {
    this.game.isRunning = false
    this.game.canvas.remove()
  }
}
