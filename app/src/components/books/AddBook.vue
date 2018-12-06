<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="book.title" require>
    <button>Add Book</button>
  </form>
</template>

<script>
export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      book: {
        title: ''
      }
    };
  },

  methods: {
    handleSubmit() {
      this.onAdd(this.book)
        .then(() => {
          this.book = { name: '' };
        });
    }
  }
};
</script>

<style>

</style>
