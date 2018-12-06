const fs = require('fs');

const pg = require('pg');

const Client = pg.Client;

const databaseUrl = 'postgres://postgress:Stitch32@localhost:5432/books';

const client = new Client(databaseUrl);

client.connect();

client.query(`
    SELECT title, author, pages, good FROM read;
`)
  .then(
    results => {
      fs.writeFileSync(
        'books.json',
        JSON.stringify(results.rows, true, 2)
      );
    },
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });