const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/superheroes';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS superheroes (
        name VARCHAR(256) NOT NULL,
        age INT,
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