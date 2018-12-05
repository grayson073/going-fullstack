const express = require('express');
const app = express();
const shortid = require('shortid');
const morgan = require('morgan');

const fs = require('fs');

function readData() {
  const data = fs.readFileSync('./data/synths.json', 'utf8');
  return JSON.parse(data);
}

function saveData(synths) {
  const json = JSON.stringify(synths, true, 2);
  fs.writeFileSync('./data/synths.json', json);
}

app.use(morgan('dev'));

// utility that check requests, if body turn into JSON and ready it for us
app.use(express.json());

app.get('/api/synths', (req, res) => {
  const synths = readData();
  if(req.query.name) {
    const match = req.query.name.toLowerCase();
    const filtered = synths.filter(s => {
      return s.name.toLowerCase().startsWith(match);
    });
    res.json(filtered);
  }
  else {
    res.json(synths);
  }
});


app.post('/api/synths', (req, res) => {
  const synths = readData();
  const synth = req.body;
  synth.id = shortid.generate();
  synths.push(synth);
  saveData(synths);
  res.json(synth);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});