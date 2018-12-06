const express = require('express');
const app = express();
const shortid = require('shortid');
const fs = require('fs');

function readData() {
  const data = fs.readFileSync('./data/characters.json', 'utf8');
  return JSON.parse(data);
}

function saveData(characters) {
  const json = JSON.stringify(characters, true, 2);
  fs.writeFileSync('./data/characters.json', json);
}

app.use(express.json());

app.get('/api/characters', (req, res) => {
  const characters = readData();
  if(req.query.name) {
    const match = req.query.name.toLowerCase();

    const filtered = characters.filter(c => {
      return c.name.toLowerCase().startsWith(match);
    });
    res.json(filtered);
  }
  else {
    res.json(characters);
  }
});

app.post('/api/characters', (req, res) => {
  const characters = readData();
  const character = req.body;
  character.id = shortid.generate();
  characters.push(req.body);
  saveData(characters);
  res.json(character);
});

// this should go at the bottom //
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});