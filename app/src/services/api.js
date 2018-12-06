export default {
  
  getSuperfoods() {
    return fetch('/api/superfoods')
      .then(response => response.json());      
  },

  getSuperfood(id) {
    return fetch(`/api/superfoods/${id}`)
      .then(response => response.json());
  },

  addSuperfood(superfood) {
    return fetch('/api/superfoods', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(superfood)
    })
      .then(response => response.json());
  }
};