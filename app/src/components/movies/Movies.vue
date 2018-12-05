<template>
    <section>
        <h2>Movies</h2>
        <!-- <AddMovie :onAdd="handleAdd"/> -->

        <ul v-if="movies">
            <li v-for="movie in movies" :key="movie.year">
                {{movie.name}}
                {{movie.year}}
            </li>
        </ul>
    </section>
</template>

<script>
import api from '../services/api.js';

export default {
  data() {
    return {
      movies: null,
    };
  },
  created() {
    api.getMovies()
      .then(movies => {
        this.movies = movies;
      });
  }
};
</script>

<style>

</style>

