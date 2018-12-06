<template>
    <form @submit.prevent="handleSubmit">
      <p>
        <label>Title:</label>
        <input v-model="book.title" required>
      </p>
      <p>
        <label>Author:</label>
        <input v-model="book.author" required>
      </p>
      <p>
        <label>Pages:</label>
        <input v-model="book.pages" type=number required>
      </p>
      <p>
        <label>Check if it was good:</label>
        <input v-model="book.good" type=checkbox>
      </p>
      <button>Add Book!</button>
    </form>
</template>

<script>
// import api from '../../services/api';

function initBook() {
  return {
    title: '',
    author: '',
    pages: '',
    good: Boolean
  };
}

export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      book: initBook(),
    };
  },
  
  methods: {
    handleSubmit() {
      this.onAdd(this.book)
        .then(() => {
          this.student = initBook();
        });
    }
  },
};
</script>

<style>

</style>
