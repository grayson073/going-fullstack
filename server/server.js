const express = require('express');
const app = express();
const shortid = require('shortid');

const fs = require ('fs');

function readData() {
  const data = fs.readFileSync('./data/emojis.json', 'utf8');
  return JSON.parse(data);
}

function saveData(emojis) {
  const json = JSON.stringify(emojis, true, 2);
  fs.writeFileSync('./data/emojis.json', json);
}

app.use(express.json());

app.get('/api/emojis', (req, res) => {
  const emojis = readData();
  res.json(emojis);
});

app.post('/api/emojis', (req, res) => {
  const emojis = readData();
  const emoji = req.body;
  emoji.id = shortid.generate();

  emojis.push(emoji);
  saveData(emojis);

  res.json(emoji);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});