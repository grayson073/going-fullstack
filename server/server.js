const express = require('express');
const app = express();
const shortid = require('shortid');

const fs = require('fs');

function readData() {
  const data = fs.readFileSync('./data/animals.json');
  return JSON.parse(data);
}

function saveData(animals) {
  const json = JSON.stringify(animals, true, 2);
  fs.writeFileSync('./data/animals.json', json)
}

app.use(express.json());

app.get('/api/animals', (req, res) => {
  const animals = readData();

  res.json(animals);
});

app.post('/api/animals', (req, res) => {

  const animals = readData();
  const animal = req.body;
  animal.id = shortid.generate(); 
}