const express = require('express');
const app = express();
const morgan = require('morgan');

const fs = require('fs');

function readData() {
  const data = fs.readFileSync('./data/guitarists.json', 'utf8');
  return JSON.parse(data);
}

function saveData(guitarists) {
  const json = JSON.stringify(guitarists, true, 2);
  fs.writeFileSync('./data/guitarists.json', json);
}

app.use(express.json());
app.use(morgan('dev'));

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

app.post('/api/guitarists', (req, res) => {
  const guitarists = readData();
  const guitarist = req.body;

  guitarists.push(guitarist);
  saveData(guitarists);

  res.json(guitarist);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});