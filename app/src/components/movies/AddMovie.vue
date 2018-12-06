<template>
  <form @submit.prevent="handleSubmit">
    <p>
      <label>Name:</label>
      <input v-model="movie.name" required>
    </p>
    <p>
      <label>Year:</label>
      <input type="number"
        v-model="movie.year" required>
    </p>

    <!-- <p>
      Rating?
    </p> -->

    <button>Add</button>
  </form>
</template>

<script>
import api from '../../services/api';

function initMovie() {
  return {
    name: '',
    year: '',
  };
}

export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      movie: initMovie(),
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.movie)
        .then(() => {
          this.movie = initMovie();
        });
    }
  }
};
</script>

<style>

</style>
