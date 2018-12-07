const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postres://postgres:Stitch32.@localhost:5432/books';
const books = require('./books.json');

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return Promise.all(
      books.map(book => {
        return client.query(`
            INSERT INTO  books (title, author, pages, good)
            VALUES ($1, $2, $3, $4);
            `,
        [book.title, book.author, book.pages, book.good]);
      })
    );
  })
  .then(
    () => console.log('`seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });