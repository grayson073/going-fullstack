export default {
  getSynths() {
    return fetch('/api/synths')
      .then(response => response.json());
  }
};