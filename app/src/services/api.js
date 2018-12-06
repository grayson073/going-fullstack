export default {

  getArticles() {

    return fetch('/api/articles_table')
      .then(response => response.json());
  },

  addArticle(article) {
    return fetch('/api/articles_table', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
    })
      .then(response => response.json());
    
  }
};