export default {

  getEmojis() {
    return fetch('/api/emojis')
      .then(response => response.json());
  },

  getEmoji(id) {
    return fetch(`/api/emojis/${id}`)
      .then(response => response.json());
  },

  addEmoji(emoji) {
    console.log('api emoji', emoji);
    return fetch('/api/emojis', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emoji)
    })
      .then(response => response.json());
  }
};