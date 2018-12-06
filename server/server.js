const express = require('express');
const app = express();
const pg = require('pg');
const morgan = require('morgan');

// const shortid = require('shortid');
// const fs = require('fs');
//enhanced logging
app.use(morgan('dev'));

//register the json "middleware" body parser
app.use(express.json());

/* connect to pg */
const Client = pg.Client;
const dbUrl = 'postgres://localhost:5432/books';
const client = new Client(dbUrl);
client.connect();
/* end connect pg */

/* defined routes: METHOD, URLPATH */
app.get('/api/books', (req, res) => {
  client.query(`
    SELECT id, title FROM books;  
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/books/:id', (req, res) => {
  client.query(`
    SELECT * FROM books WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});
  
app.post('/api/books', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO books (title, author, pages, good)
    VALUES($1, $2, $3, $4)
    RETURNING id, title, author, pages, good;
  `[body.title, body.author, body.pages, body.good])
    .then(result => {
      res.json(result.rows[0]);
    });
});
/* end defined routes*/

/* configure and start the server */

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});
/* end configure and server start */