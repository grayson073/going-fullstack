<template>
  <section v-if="games">
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
    games: Array,
    onAdd: Function
  },
  components: {
    Game,
  },
  methods: {
    handleAdd(game) {
      this.onAdd(game);
    }
  }
};
</script>

<style>
  .game-tiles {
    display: flex;
    flex-flow: row wrap;
  }
</style>
