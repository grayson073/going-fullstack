const pg = require('pg');

const Client = pg.Client;

const databaseURL = 'postgres://localhost:5432/news_articles';


const client = new Client(databaseURL);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS news_articles (
        id SERIAL PRIMARY KEY,
        title VARCHAR(256) NOT NULL,
        category VARCHAR(256),
        track VARCHAR(256),
        views VIEWS
      );
    `);
  })
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });