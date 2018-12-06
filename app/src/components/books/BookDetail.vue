<template>
  <section v-if="student">
    <h2>{{book.title}}</h2>
    <p>{{book.author}}</p>
    <p>{{book.pages}}</p>
  </section>

</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      student: null
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
