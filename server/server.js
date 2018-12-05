const express = require('express');
const app = express();

const fs = require('fs');

function readData() {
  const data = fs.readFileSync('./data/movies.json', 'utf8');
  return JSON.parse(data);
}
function saveData(movies) {
  const json = JSON.stringify(movies, true, 2);
  fs.writeFileSync('./data/movies.json', json);
}

app.use(express.json());

app.get('/api/movies', (req, res) => {
  const movies = readData();
  res.json(movies);
});

app.post('/api/movies', (req, res) => {
  const movies = readData();
  const movie = req.body;
  movies.push(movie);
  saveData(movies);

  res.json(movies);
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);

});


