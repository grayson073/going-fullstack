<template>
  <form>
    <label>
      Title:
      <input v-model="game.title" type="text">
    </label>
    <label>
      Year:
      <input v-model.number="game.year" type="number">
    </label>
    <label>
      Image:
      <input v-model="game.imageUrl" type="text">
    </label>
    <label>
      Genre:
      <select v-model.number="game.genreId">
        <option value="sh">Action</option>
        <option value="sh">Adventure</option>
        <option value="sh">Shooter</option>
        <option value="sh">Sports</option>
      </select>
    </label>
  </form>
</template>

<script>
export default {
  data() {
    return {
      game: {
        title: '',
        year: 1970,
        imageUrl: '',
        genreId: 0,
      }
    };
  },
};
</script>

<style lang="postcss">

  form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

  }
    input, select {
      margin: 10px;
    }
</style>
