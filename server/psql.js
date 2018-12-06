// const fs = require('fs');

const pg = require('pg');

const Client = pg.Client;

const databaseUrl = 'postgres://postgres:Stitch32.@localhost:5432/books';

const client = new Client(databaseUrl);

client.connect();

client.query(`
    SELECT * FROM books;
`)
  .then(results => {
    console.log(results.rows);
  })
  .catch(err => {
    console.log(err); 
  });