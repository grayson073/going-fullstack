<template>
  <section v-if="movie">
    <h2>{{movie.name}}</h2>
    <p>
      Year Released: {{movie.year}}
    </p>
  </section>
</template>

<script>
import api from '../../services/api.js';

export default {
  data() {
    return {
      movie: null
    };
  },
  created() {
    api.getMovie(this.$route.params.id)
      .then(movie => {
        this.movie = movie;
      });
  }
};
</script>

<style>

</style>
