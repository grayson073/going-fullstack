export default {

  getEmojis() {
    return fetch('/api/emojis')
      .then(response => response.json());
  },

  addEmoji(emoji) {
    console.log('api emoji', emoji);
    return fetch('/api/emojis', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emoji)
    })
      .then(response => response.json());
  }
};