export default {
  getCampgrounds() {
    return fetch('/api/campgrounds')
      .then(response => response.json());
  },

  addCampground(campground) {
    return fetch('/api/campgrounds', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(campground)
    })
      .then(response => response.json());
  }
};
// *