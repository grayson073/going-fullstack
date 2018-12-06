<template>
    <section class="books">
        <h2>Books</h2>

        <AddBook :onAdd="handleAdd"/>
        <BookList :books="books"/>

    </section>
</template>

<script>
import api from '../../services/api';
import AddBook from './AddBook';
import BookList from './BookList';

export default {
  data() {
    return {
      books: null,
      error: null
    };
  },
  components: {
    AddBook,
    BookList
  },
  created() {
    api.getBooks()
      .then(books => {
      // console.log(books);
        this.books = books;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleAdd(book) {
      console.log('bananas');
      return api.addBook(book)
        .then(saved => {
          this.books.push(saved);    
        });
    }
  }
};
</script>

<style>

</style>
