const pg = require('pg');

const Client = pg.Client;

const databaseUrl = 'postgres://localhost:5432/animal';

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS animals (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        weight INT,
        mammal BOOLEAN,
        image TEXT
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