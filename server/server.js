const express = require('express');
const app = express();
const morgan = require('morgan');
const pg = require('pg');

app.use(morgan('dev'));
app.use(express.json());

const Client = pg.Client;
const dbUrl = 'postgres://localhost:5432/guitarists';
const client = new Client(dbUrl);
client.connect();



app.get('/api/guitarists', (req, res) => {
  client.query(`
    SELECT id, name FROM guitarists;
  `)
    .then(result => {
      res.json(result.rows);
    });

});

app.get('/api/guitarists/:id', (req, res) => {
  client.query(`
    SELECT * FROM guitarists WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/guitarists', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO guitarists (name, type, yob)
    VALUES($1, $2, $3)
    RETURNING id, name, type, yob;
  `,
  [body.name, body.type, body.yob])
    .then(result => {
      res.json(result.rows[0]);
    });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});
