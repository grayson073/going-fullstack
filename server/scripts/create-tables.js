// const client = requre('../db-client')
//clean up

const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/films';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS movies (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        year INTEGER,
        rating BOOLEAN
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