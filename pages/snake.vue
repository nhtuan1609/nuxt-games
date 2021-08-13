<template>
  <div class="home">
    <!-- App name -->
    <div
      class="
        text-center
        display-3
        font-weight-medium
        my-10
        yellow--text
        text--darken-3
      "
    >
      Vue Snake
    </div>

    <!-- Control button -->
    <div class="mb-2">
      <v-btn @click="startGame">Start game</v-btn>
      <v-btn class="ml-2" @click="stopGame">Stop game</v-btn>
    </div>

    <!-- Game container -->
    <v-card
      id="game-snake-container"
      class="pa-4"
      width="1200"
      height="680"
      :elevation="6"
    >
    </v-card>
  </div>
</template>

<script>
import { GameController } from '@/assets/snake/gameController.js'

export default {
  name: 'Snake',
  data() {
    return {
      gameController: null,
    }
  },
  methods: {
    startGame() {
      this.stopGame()
      this.gameController = new GameController()
      this.gameController.startSnakeGame()
    },
    stopGame() {
      if (this.gameController) {
        this.gameController.stopSnakeGame()
        this.gameController = null
      }
    },
  },
}
</script>
