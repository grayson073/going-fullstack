const express = require('express');
const app = express();
const client = require('./db-client');

app.use(express.json());


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
    SELECT
      emojis.name,
      emojis.image,
      emojis.goodness,
      emojis.yob,
      scales.scale as scale
    FROM emojis
    JOIN scales
    ON emojis.scales_id = scales.id
    WHERE emojis.id = $1;
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

app.post('/api/emojis/delete', (req, res) => {
  client.query(`
    DELETE FROM emojis WHERE id = $1
  `,
  [req.body.id]);
  res.json();
});

app.post('/api/emojis/update/:id', (req, res) => {
  const body = req.body;
  client.query(`
    UPDATE emojis
    SET
      name = $1,
      image = $2,
      yob = $3,
      scales_id = $4
    WHERE id = $5
  `,
  [body.name, body.image, body.yob, body.scale, req.params.id])
    .then(() => res.json());
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});