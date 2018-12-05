export default {
  
  getSuperheroes() {
    return fetch('/api/superheroes')
      .then(response => response.json());      
  },

  addSuperhero(superhero) {
    return fetch('/api/superheroes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(superhero)
    })
      .then(response => response.json());
  }
};