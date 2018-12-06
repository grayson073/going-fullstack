<template>
    <section>
        <h2>List of Great Movies</h2>

        <AddMovie :onAdd="handleAdd"/>

        <ul v-if="movies">
            <li v-for="movie in movies" :key="movie.id">
                {{movie.name}}
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
li {
  list-style: none;
  padding: 10px;
  margin: 5px;
  text-align: center;
  font-size:1.3rem;
}
li:hover {
  background: darkgray;
}

</style>

