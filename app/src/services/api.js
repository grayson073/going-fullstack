export default {

  getEmojis() {
    return fetch('/api/emojis')
      .then(response => response.json());
  }
};