<template>
    <form @submit.prevent="handleSubmit">
      <p>
        <label> Movie Name
        <input v-model="movie.name" require>
        </label>
      </p>
      <p>
        <label> Year
        <input v-model="movie.year" require>
        </label>
      </p>
        <label> Genre
        <input v-model="movie.genre" require>
        <button>Add</button>
        </label>
    </form>
</template>

<script>


function initMovie() {
  return {
    name: '',
    genre: '',
    year: ''
  };
}
export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      movie: initMovie (),
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
button {
  background-color: gray;
}

</style>
