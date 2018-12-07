export default {
  getAnimals() {
    return fetch('/api/animals')
      .then(response => response.json());
  },

  getAnimal(id) {
    return fetch(`/api/animals/${id}`)
      .then(response => response.json());
  },

  addAnimal(animal) {
    return fetch('/api/animals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(animal)
    })
      .then(response => response.json());
  },

  deleteAnimal(id) {
    return fetch(`/api/animals/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json());
  },

  getSizes() {
    return fetch('/api/sizes')
      .then(response => response.json());
  }
};