export default {
  getMovies() {
    return fetch('/api/movies')
      .then(response => response.json());
  },
};