const express = require('express');
const app = express();
const morgan = require('morgan');
const pg = require('pg');

app.use(morgan('dev'));
app.use(express.json());

const Client = pg.Client;
const dbUrl = 'postgres://localhost:5432/superheroes';
const client = new Client(dbUrl);
client.connect();

app.get('/api/superheroes', (req, res) => {
  client.query(`
    SELECT name, age FROM superheroes;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/superheroes/:name', (req, res) => {
  client.query(`
    SELECT * FROM superheroes WHERE name = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/superheroes', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO superheroes (name, age, id)
    VALUES($1, $2, $3)
    RETURNING name, age, id;
  `,
  [body.name, body.age])
    .then(result => {
      res.json(result.rows[0]);
    });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});