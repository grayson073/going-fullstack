<template>
  <form @submit.prevent="handleSubmit">
    Name: <input v-model="singer.name">
    Genre: <input v-model="singer.genre">
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

</style>
