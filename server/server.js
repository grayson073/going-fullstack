const express = require('express');
const app = express();
// const shortid = require('shortid');
const pg = require('pg');

app.use(express.json());

const Client = pg.Client;
const dbUrl = 'postgres://shaba:123@localhost:5432/emo';
const client = new Client(dbUrl);
client.connect();

app.get('/api/emojis', (req, res) => {
  client.query(`
    SELECT * FROM emojis;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/emojis/:id', (req, res) => {
  client.query(`
    SELECT * FROM emojis WHERE id = $1;
    `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/emojis', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO emojis (name, image, yob, goodness)
    VALUES($1, $2, $3, $4)
    RETURNING id, name, image, yob, goodness;
  `,
  [body.name, body.image, body.yob, body.goodness])
    .then(result => {
      res.json(result.rows[0]);
    });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});