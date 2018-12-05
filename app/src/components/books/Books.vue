<template>
  <section class="books">
    <h2>Books</h2>
</template>

<script>
import api from '../../services/api.js';

export default {
  created() {
    api.getBooks()
      .then(books => {
        this.books = books;
      })
      .catch(err => {
        this.error = err;
    });  
  
},
  methods: {

  }
</script>

<style>

</style>
