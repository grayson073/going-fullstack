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

    <p id="rating">
      <label>Rating:</label>
      <br />
      <label for="good">Good</label>
      <input type="radio" id="good" name="radio-button" value="true"
        v-model="movie.rating" required>
        <br />
      <label for="bad">Bad</label>
      <input type="radio" id="bad" name="radio-button" value="false"
        v-model="movie.rating" required>
    </p>
    <br />
    <button>Add</button>
  </form>
</template>

<script>

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
#rating {
  display: inline-block;
  border: 1px solid black;
  padding: 10px;
}
</style>