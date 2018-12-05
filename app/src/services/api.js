export default {
  getBooks() {
    return fetch('/api/books')
      .then(response => response.json());
  },

  addBooks(book) {
    return fetch('/api/books', {
      methods: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
      .then(response => response.json());
  }
};