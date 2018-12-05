const express = require('express');
const app = express();

const fs = require('fs');

function readData() {
  const data = fs.readFileSync('./data/movies.json', 'utf8');
  return JSON.parse(data);
}

app.use(express.json());

app.get('/api/movies', (req, res) => {
  const movies = readData();
  res.json(movies);
});

app.post('/api/movies', (req, res) => {
  const movies = readData();
  res.json(movies);
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);

});


