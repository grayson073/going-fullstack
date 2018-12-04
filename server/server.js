const express = require('express');
const app = express();
const fs = require('fs');

function readData() {
  const data = fs.readFileSync('./data/books.json', 'utf8');
  return JSON.parse(data);
}

app.use(express.json());

app.get('/', (req, res) => {
  const books = readData();
  console.log(books);
});

// this should go at the bottom //
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});