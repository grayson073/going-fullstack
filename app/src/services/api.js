
const getOptions = (method, data) => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
};

export default {
  getGames() {
    return fetch('/api/games')
      .then(response => response.json());
  },

  getGame(id) {
    return fetch(`/api/games/${id}`)
      .then(response => response.json());
  },

  addGame(game) {
    return fetch(`/api/games`, getOptions('POST', game))
      .then(response => response.json());
  },

  updateGame(game) {
    return fetch(`/api/games/${game.id}`, getOptions('PUT', game))
      .then(response => response.json());
  },
};