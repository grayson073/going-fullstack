<template>
  <form @submit.prevent="handleSubmit">
    <p v-if="action === 'add'">Add a game:</p>
    <p v-if="action === 'update'">Update a game:</p>
    <label>
      Title:
      <input v-model="game.title" placeholder="Title" type="text">
    </label>
    <label>
      Year:
      <input v-model.number="game.year" placeholder="Year" type="number">
    </label>
    <label>
      Image:
      <input v-model="game.imageUrl" placeholder="Image" type="text">
    </label>
    <label>
      Genre:
      <select v-model.number="game.genreId">
        <option disabled selected value="">Select a genre</option>
        <option value="1">Action</option>
        <option value="3">Adventure</option>
        <option value="2">SHooter</option>
        <option value="4">Sports</option>
      </select>
      <label>
      <button>Add</button>
      </label>
    </label>

  </form>
</template>

<script>
export default {
  data() {
    return {
      game: {
        title: '',
        year: null,
        imageUrl: '',
        genreId: ''
      }
    };
  },
  props: {
    action: String,
    onSubmit: Function
  },
  methods: {
    handleSubmit() {
      this.onSubmit(this.game);
    }
  }
};
</script>

<style lang="postcss">

  form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

  }
    input, select {
      margin: 10px;
      width: 135px;
    }

    button {
      margin-top: 30px;
    }
</style>
