<template>
  <section v-if="games">
    <AddGame/>
    <div class="game-tiles">
      <Game v-for="game in games"
        :game="game"
        :key="game.id"/>
    </div>
  </section>
</template>

<script>
import AddGame from './AddGame';
import Game from './Game';

export default {
  props: {
    games: Array
  },
  components: {
    AddGame,
    Game,
  }
};
</script>

<style>
  .game-tiles {
    display: flex;
    flex-flow: row wrap;
  }
</style>
