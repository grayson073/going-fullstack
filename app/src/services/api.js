export default {

  getArticles(searchTerm = '') {
    if(searchTerm.startsWith('fake')) {
      return Promise.reject(new Error('FAKE NEWS'));
    }

    return fetch('https://newsapi.org/v2/everything?q=Apple&from=2018-12-03&sortBy=popularity&apiKey=2ca2954860044284aefd2b4c3dd9d2d8').then(response => response.json());

  },

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