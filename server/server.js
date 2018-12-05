const express = require('express');
const app = express();
const shortid = require('shortid');

const fs = require('fs');

function readData() {
  const data = fs.readFileSync('./scripts/books.json', 'utf8');
  return JSON.parse(data);
}

function saveData(books) {
  const json = JSON.stringify(books, true, 2);
  fs.writeFileSync('./scripts/books.json', json);
}

app.use(express.json());

app.get('/api/books', (req, res) => {
  const books = readData();
  // res.json(books);
  
  if(req.query.title) {
    const match = req.query.title.toLowerCase();
    const filtered = books.filter(b => {
      return b.title.toLowerCase().startsWith(match);
    });
    res.json(filtered);
  }
  else {
    res.json(books);
  }
});

app.post('/api/books', (req, res) => {

  const books = readData();
  const book = req.body;
  book.id = shortid.generate();
  
  books.push(book);
  saveData(books);

  res.json(book);
});
// this should go at the bottom //
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});