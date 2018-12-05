<template>
    <section>
        <h2>Movies</h2>

        <AddMovie :onAdd="handleAdd"/>

        <ul v-if="movies">
            <li v-for="movie in movies" :key="movie.id">
                {{movie.name}}
                {{movie.year}}
            </li>
        </ul>
    </section>
</template>

<script>
import api from '../services/api.js';
import AddMovie from './AddMovie';

export default {
  data() {
    return {
      movies: null,
      error: null
    };
  },
  components: {
    AddMovie
  },
  created() {
    api.getMovies()
      .then(movies => {
        this.movies = movies;
      })
      .catch(err => {
        this.error = err;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleAdd(movie) {
      return api.addMovie(movie)
        .then(saved => {
          this.movies.push(saved);
        });
    }
  }
};
</script>

<style>

</style>

