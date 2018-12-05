<template>
  <section class="books">
    <h2>Books</h2>
    <addBook :onAdd="handleAdd"/>
    <ul v-if="books">
      <li v-for="book in books"
        :key="book.title">
        {{book.title}}
      </li>
    </ul>
  </section>
</template>

<script>
import api from '../../services/api.js';
import AddBook from './AddBook';

export default {
  data() {
    return {
      books: null,
      error: null
    };
  },
  components: {
    AddBook
  },
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
    handleAdd(book) {
      return api.addBook(book)
        .then(saved => {
          this.students.push(saved);
        });
    }
  }
};
</script>

<style>

</style>
