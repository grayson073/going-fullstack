const express = require('express');
const app = express();
const shortid = require('shortid');

const fs = require ('fs');

function readData() {
  const data = fs.readFileSync('./data/emojis.json', 'utf8');
  return JSON.parse(data);
}

app.use(express.json());

app.get('/api/emojis', (req, res) => {
  const emojis = readData();
  res.json(emojis);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});