const pg = require('pg');

const Client = pg.Client;

const databaseURl = 'postgres://localhost:5432/news_articles';

const client = new Client(databasUrl);

client.connect()
  .then(() => {
    return client.query(`
      DROP TABLE IF EXISTS news_articles;
    `);
  })
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });