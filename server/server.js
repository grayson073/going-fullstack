console.log('this is a cool test');

const express = require('express');
const app = express();
// const shortid = require('shortid');

const fs = require('fs');

function readData() {
  const data = fs.readFileSync('./data/synths.json', 'utf8');
  return JSON.parse(data);
}

app.use(express.json());

app.get('https://localhost:3000/api/synths', (req, res) => {
  const synths = readData();
  res.json(synths);
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});