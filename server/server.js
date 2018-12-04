const imported = require('path');
const express = require('express');
const app = express();
const shortid = require('shortid');

const fs = require('fs');

function readData() {
  const data = fs.readFileSync('./data/guitarists.json', 'utf8');
  return JSON.parse(data);
}

app.use(express.json());

app.get('/api/guitarists', (req, res) => {
  const guitarists = readData();

  if(req.query.name) {
    const match = req.query.name.toLowerCase();
    const filtered = guitarists.filter(s => {
      return s.name.toLowerCase().startsWith(match);
    });
    res.json(filtered);
  }
  else {
    res.json(guitarists);
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});