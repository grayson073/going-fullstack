export default {

  getArticles() {

    return fetch('/api/articles')
      .then(response => response.json());
  },

  addArticle(article) {
    return fetch('/api/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
    })
      .then(response => response.json());
    
  }
};