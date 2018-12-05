const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/guitarists';

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS guitarists (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        music_type VARCHAR(256),
        yob INT
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