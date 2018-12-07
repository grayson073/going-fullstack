export default {
  getSynths() {
    return fetch('/api/synths')
      .then(response => response.json());
  },
  getSynth(id) {
    return fetch(`/api/synths/${id}`)
      .then(response => response.json());
  },
  addSynth(synth) {
    return fetch('/api/synths', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(synth)
    })
      .then(response => response.json());
  },
  deleteSynth(id) {
    console.log(id);
    return fetch(`/api/synths/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json());
  }
};