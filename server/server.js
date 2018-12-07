const express = require('express');
const app = express();

/* setting up simple database */

const fs = require('fs');

function readData() {
  const data = fs.readFileSync('./data/articles.json', 'utf8');
  return JSON.parse(data);
}

function saveData(articles) {
  const json = JSON.stringify(articles, true, 2);
  fs.writeFileSync('./data/articles.json', json);
}

/*end database*/

app.use(express.json());


app.get('/api/articles', (req, res) => {
  const articles = readData();

  if(req.query.name) {
    const match = req.query.title.toLowerCase();
    const filtered = articles.filter(s => {
      return s.title.toLowerCase().startsWith(match);
    });
    res.json(filtered);
  }
  else {
    res.json(articles);
  }
});

app.post('/api/articles', (req, res) => {

  const articles = readData();
  const article = req.body;
  articles.push(article);
  saveData(articles);

  res.json(article);
  
});

/* configure and start the server */

const PORT = 3000;
app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});