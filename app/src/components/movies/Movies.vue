<template>
  <div class="movies">
    <h2>Movies!!</h2>
    <MovieList :movies="movies" />
  </div>
</template>

<script>
import api from '../../services/api.js';
import MovieList from './MovieList.vue';

export default {
  data() {
    return {
      movies: null,
      error: null
    };
  },
  components: {
    MovieList
  },
  created() {
    api.getMovies()
      .then(movies => {
        this.movies = movies;
      })
      .catch(err => {
        this.error = err;
      });
  }
};
</script>

<style>

</style>