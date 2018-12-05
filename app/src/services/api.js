export default {
  
  getGuitarists() {
    return fetch('/api/guitarists')
      .then(response => response.json());      
  },
  
  addGuitarist(guitarist) {
    return fetch('/api/guitarists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(guitarist)
    })
      .then(response => response.json());
  },

  
};