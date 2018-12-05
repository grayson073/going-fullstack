export default {

  getArticles() {

    return fetch('/api/articles')
      .then(response => response.json());
  }

  // addArticles(article) {
  //   return fetch('/api/students', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(article)
  //   })
  //     .then(response => response.json());
    
  // }
};