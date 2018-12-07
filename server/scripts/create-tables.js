const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/foods';

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS superfoods (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        benefits VARCHAR(256),
        is_anti_inflammatory BOOLEAN
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