const express = require('express');
const app = express();
const morgan = require('morgan');
const pg = require('pg');

/* setting up simple database */

app.use(morgan('dev'));

app.use(express.json());

/* connect to pg */
const Client = pg.Client;
const dbUrl = 'postgres://localhost:5432/news_articles';
const client = new Client(dbUrl);
client.connect();

app.get('/api/articles', (req, res) => {

  client.query(`
    SELECT id, title FROM news_articles;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/articles/:id', (req, res) => {

  client.query(`
    SELECT * FROM news_articles WHERE Views = 1000
  `,
  [req.params.Views])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/news_articles', (req, res)=> {
  const body = req.body;

  client.query(`
    INSERT INTO news_articles(title, author, views)
    VALUES ($1, $2, $3, $4)
    RETURNING title, author, views
  `,
  [body.title, body.author, body.views])
    .then(result => {
      res.json(result.rows[0]);
    });
});

/* configure and start the server */
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});