export default {
  getBooks() {
    return fetch('/api/books')
      .then(response => response.json());
  },

  addBook(book) {
    return fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
      .then(response => response.json());
  }
};