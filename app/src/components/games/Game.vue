<template>
  <ul>
      <li>
        <p><RouterLink :to="`/games/${game.id}`" :game="game">{{game.title}} ({{game.year}})</RouterLink></p>
        <p>Genre: {{game.genre}}</p>
        <img :src="game.imageUrl">
      </li>
  </ul>
</template>

<script>
export default {
  props: {
    game: Object
  }
};
</script>

<style scoped>
  ul {
    display: inline;
  }
  li {
    list-style: none;
    background-color: rgb(211, 234, 240);
    width: 250px;
    height: 250px;
    padding: 10px 0px 20px 0px;
  }

  li:hover {
    background-color: rgb(141, 222, 240);
  }
  img {
    width: 100px;
  }
</style>
