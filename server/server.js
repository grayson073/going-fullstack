const express = require('express');
const app = express();
//const shortid = require('shortid');

//new version of import from 
const fs = require('fs');

//reading is like GET?
function readData() {
  const data = fs.readFileSync('./data/books.json');
  return JSON.parse(data);
}

//saving is like POST?
function saveData(books) {
  const json = JSON.stringify(books, true, 2);
  fs.writeFileSync('./data/books.json', json);
}

//express is middleware AND that means?
app.use(express.json());

app.get('/api/books', (req, res) => {
  const books = readData();
  res.json(books);


  // if(req.query.name) {
  //   const match = req.query.name.toLowerCase();
  //   const filtered = books.filters(s => {
  //     return s.name.toLowerCase().startsWith(match);
  //   });
  //   res.json(filtered);
  // }
  // else {
  //   res.json(books);
  // }

});

app.post('/api/books', (req, res) => {
  const books = readData();
  const book = req.body;
  books.push(book);
  saveData(books);

  res.json(book);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});
