<template>
    <section class="books">
        <h2>Books</h2>

        <AddBook :onAdd="handleAdd"/>

        <ul v-if="books">
            <li v-for="book in books" 
                :key="book.id">
                {{book.title}}
            </li>
        </ul>
    </section>
</template>

<script>
import api from '../../services/api';
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
