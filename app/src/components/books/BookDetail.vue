<template>
  <section v-if="book">
    <h2>Book: {{book.title}}</h2>
    <p>Author: {{book.author}}</p>
    <p>Pages: {{book.pages}}</p>
  </section>

</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      book: null
    };
  },
  created() {
    api.getBook(this.$route.params.id)
      .then(book => {
        this.book = book;
      });
  }
};
</script>

<style>

</style>
