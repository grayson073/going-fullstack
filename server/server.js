const express = require('express');
const app = express();
const shortid = require('shortid');

const fs = require('fs');

function readData() {
  const data = fs.readFileSync('./data/superheroes.json', 'utf8');
  return JSON.parse(data);
}
function saveData(superheroes) {
  const json = JSON.stringify(superheroes, true, 2);
  fs.writeFileSync('./data/superheroes.json', json);
}
app.use(express.json());

app.get('/api/superheroes', (req, res) => {
  const superheroes = readData();
  res.json(superheroes);
});
app.post('/api/superheroes', (req, res) => {
  const superheroes = readData();
  const superhero = req.body;
  superhero.id = shortid.generate();
  superheroes.push(superhero);
  saveData(superheroes);
  res.json(superhero);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});