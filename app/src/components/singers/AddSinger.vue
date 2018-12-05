<template>
  <form @submit.prevent="handleSubmit">
    <p class="add-title">Add your favorite singer:</p>
    <span>Name: <input v-model="singer.name"></span>
    <span>Genre: <input v-model="singer.genre"></span>
    <span>Age: <input type=number  v-model="singer.age"></span>
    <span>Summary: <input v-model="singer.summary"></span>
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
        age: undefined
      }
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.singer)
        .then(() => {
          this.singer = { 
            name: '',
            genre: '',
            age: undefined
          };
        });
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow');

  form {
    margin-top: 30px;
    background: lightgoldenrodyellow;
    padding: 0px 15px 15px 15px;
    border: 2px solid darkgoldenrod;
    width: 850px;
    font-family: 'PT Sans Narrow', sans-serif;
  }

  span {
    margin: 10px;
  }

  .add-title {
    font-size: 1.2em;
    font-weight: 600;
  }
</style>
