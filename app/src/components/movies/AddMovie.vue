<template>
    <form @submit.prevent="handleSubmit">
        <label> Movie Name
        <input v-model="movie.name" required>
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

</style>
