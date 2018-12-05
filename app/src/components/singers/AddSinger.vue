<template>
  <form @submit.prevent="handleSubmit">
    <p class="add-title">Add your favorite singer:</p>
    <span>Name: <input v-model="singer.name"></span>
    <span>Genre: <input v-model="singer.genre"></span>
    <button>Add</button>
  </form>
</template>

<script>
export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      singer: {
        name: '',
        genre: '',
      }
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.singer)
        .then(() => {
          this.singer = { 
            name: '',
            genre: ''
          };
        });
    }
  }
};
</script>

<style>
  form {
    margin-top: 30px;
    background: lightgoldenrodyellow;
    padding: 15px;
    border: 2px solid darkgoldenrod;
  }

  span {
    margin: 10px;
  }

  .add-title {
    font-size: 1.2em;
    font-weight: 600;
  }
</style>
