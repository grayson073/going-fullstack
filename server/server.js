const express = require('express');
const app = express();
const shortid = require('shortid');
const morgan = require('morgan');

const fs = require('fs');

function readData() {
  const data = fs.readFileSync('./data/movies.json', 'utf8');
  return JSON.parse(data);
}
function saveData(movies) {
  const json = JSON.stringify(movies, true, 2);
  fs.writeFileSync('./data/movies.json', json);
}
app.use(morgan('dev'));

app.use(express.json());

app.get('/api/movies', (req, res) => {
  const movies = readData();
  res.json(movies);
});

app.post('/api/movies', (req, res) => {
  const movies = readData();
  const movie = req.body;
  movie.id = shortid.generate();
  movies.push(movie);
  saveData(movies);

  res.json(movie);
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);

});


