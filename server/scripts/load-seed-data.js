const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/news_articles';
const articles = require('../data/articles.json');

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    // "Promise all" does a parallel execution of async tasks
    return Promise.all(
      articles.map(article => {
        return client.query(`
          INSERT INTO news_articles (title, author, views)
          VALUES ($1, $2, $3);
        `,
        [article.title, article.author, article.views]);
      })
    );
  })
  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });