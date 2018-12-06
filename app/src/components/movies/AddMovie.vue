<template>
    <form @submit.prevent="handleSubmit">
        <label> Movie Name
        <input v-model="movie.name" require>
        </label>
        <label> Year
        <input v-model="movie.year" require>
        </label>
        <label> Genre
        <input v-model="movie.genre" require>
        <button>Add</button>
        </label>
    </form>
</template>

<script>
export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      movie: {
        name: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.movie)
        .then(() => {
          this.movie = { name: '' };
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
