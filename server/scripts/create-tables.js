const pg = require('pg');

const Client = pg.Client;
const dbUrl = 'postgres://localhost:5432/characters';
const client = new Client(dbUrl);
client.connect()
  .then(() => {
    return client.query(`
        CREATE TABLE IF NOT EXISTS characters (
            id SERIAL PRIMARY KEY,
            name VARCHAR(256) NOT NULL,
            cool BOOLEAN,
            dob DATE
        )
    `);
  }).then(
    () => console.log('create tables complete'),
    err => console.log(err)
  ).then(() => {
    client.end();
  });