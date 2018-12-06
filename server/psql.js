// const fs = require('fs');

const pg = require('pg');

const Client = pg.Client;

const databaseUrl = 'postgres://postgres:Stitch32.@localhost:5432/books';

const client = new Client(databaseUrl);

client.connect();

client.query(`
    SELECT title, artist, pages, good FROM books;
`)
  .then(results => {
    false.writeFileSync(
      'book.json',
      JSON.stringify(results.rows, true, 2)
    );
  },
  err => console.log(err)
  )
  .then(() => {
    client.end();
  });