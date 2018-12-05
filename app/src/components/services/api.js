export default {
  getMovies() {
    return fetch('/api/movies')
      .then(response => response.json());
  },

  addMovie(movie) {
    return fetch('api/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    })
      .then(response => response.json());
  }
};