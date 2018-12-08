<template>
  <ul>
      <li>
        <p>{{game.title}} ({{game.year}})</p>
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
    background-color: rgb(227, 207, 245);
    width: 250px;
    height: 250px;
    padding: 15px;
    margin: 25px;
  }
  img {
    width: 100px;
  }
</style>
