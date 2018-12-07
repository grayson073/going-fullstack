const express = require('express');
const app = express();
const morgan = require('morgan');
const pg = require('pg');

app.use(morgan('dev'));
app.use(express.json());

const dbUrl = 'postgres://localhost:5432/characters';
const Client = pg.Client;
const client = new Client(dbUrl);
client.connect();

app.get('/api/characters', (req, res) => {
  client.query(`
    SELECT name, id FROM characters;`)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/characters/:id', (req, res) => {
  client.query(`
    SELECT * FROM characters WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/characters', (req, res) => {
  const body = req.body;
  client.query(`
    INSERT INTO characters (name, cool, dob)
    VALUES ($1, $2, $3)
    RETURNING *;`, 
  [body.name, body.cool, body.dob])
    .then(result => {
      res.json(result.rows[0]);
    });
});

// this should go at the bottom //
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});