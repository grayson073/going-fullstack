<template>
  <ul v-if="movies">
    <li v-for="movie in movies" :key="movie.id">
      <RouterLink :to="`/movies/${movie.id}`">{{movie.name}}</RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    movies: null
  }
};
</script>

<style lang="postcss" scoped>
ul {
  list-style: none;
}
</style>