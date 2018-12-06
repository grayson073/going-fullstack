const express = require('express');
const app = express();
const morgan = require('morgan');
const pg = require('pg');

app.use(morgan('dev'));

app.use(express.json());

const Client = pg.Client;
const dbUrl = 'postgres://localhost:5432/films';
const client = new Client(dbUrl);
client.connect();

app.get('/api/movies', (req, res) => {
  client.query(`
    SELECT id, name FROM movies;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/movies/:id', (req, res) => {
  client.query(`
    SELECT * FROM movies WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/movies', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO movies (name, year, rating)
    VALUES($1, $2, $3)
    RETURNING id, name, year, rating;
  `,
  [body.name, body.year, body.rating])
    .then(result => {
      res.json(result.rows[0]);
    });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});