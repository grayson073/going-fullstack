<template>
  <section v-if="games">
    <h1>Games List:</h1>
    <div class="game-tiles">
      <Game v-for="game in games"
        :game="game"
        :key="game.id"/>
    </div>
  </section>
</template>

<script>
import Game from './Game';

export default {
  props: {
    games: Array
  },
  components: {
    Game
  }
};
</script>

<style>
  .game-tiles {
    display: flex;
    flex-flow: row wrap;
  }
</style>
