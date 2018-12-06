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


const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});