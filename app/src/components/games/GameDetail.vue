<template>
  <section v-if="game" class="game-detail">
    <h1 class="item-a">{{game.title}} ({{game.year}})</h1>
    <div class="item-b">
      <p>As 2018 rolls out a ton of new games, <strong>{{game.title}}</strong> is performing well in both sales and gamer reviews. Released in {{game.year}}, the series has come a long way from it's humble beginnings, most notably, huge advances in story, gameplay, and of course, modern graphics.</p>
      <img :src="`${game.imageUrl}`"/>
    </div>
  </section>
</template>

<script>
import gamesApi from '../../services/api.js';

export default {
  data() {
    return {
      game: null
    };
  },
  created() {
    gamesApi.getGame(this.$route.params.id)
      .then(game => this.game = game);
  }
};
</script>

<style lang="postcss" scoped>
  .item-a {
    grid-area: header;
  }
  .item-b {
    grid-area: main;
  }
  .game-detail {
    display: grid;
    width: 100%;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: auto;
    grid-template-areas:
      "header header header header"
      "main main main main"
  }
</style>
