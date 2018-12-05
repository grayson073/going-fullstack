const pg = require('pg');

const Client = pg.Client;

const databaseUrl = 'postgres://postgres:Stitch32.>@localhost:5432/read';

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
            CREATE TABLE IF NOT EXISTS read (
                id SERIAL PRIMARY KEY,
                title VARCHAR(256) NOT NULL,
                author VARCHAR(256),
                pages INT,
                good BOOLEAN
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