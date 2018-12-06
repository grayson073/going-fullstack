const pg = require('pg');

const Client = pg.Client;

const databaseUrl = 'postgres://localhost:5432/news_articles';

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      DROP TABLE IF EXISTS articles_table;
    `);
  })
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });