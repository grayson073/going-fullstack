const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/synthesizers';

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS synth (
        name VARCHAR(256) NOT NULL,
        image VARCHAR(256),
        polyphonic BOOLEAN,
        year INT,
        id SERIAL PRIMARY KEY
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