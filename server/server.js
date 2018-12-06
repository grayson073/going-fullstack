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


const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});