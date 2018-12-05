const express = require('express');
const app = express();
const shortid = require('shortid');
const morgan = require('morgan');
const pg = require('pg');

// enhanced logging
app.use(morgan('dev'));

/* Connect to pg */
const Client = pg.Client;
const dbUrl = 'postgres://localhost:5432/rockstars';
const client = new Client(dbUrl);
client.connect();
/* end connect pg */


/* This code is our very very simple database */

const fs = require('fs');

function readData() {
  // we don't normally use sync, but fine for today
  const data = fs.readFileSync('./data/singers.json', 'utf8');
  return JSON.parse(data);
}

function saveData(singers) {
  const json = JSON.stringify(singers, true, 2);
  fs.writeFileSync('./data/singers.json', json);
}
/* end database stuff */

// register the json "middleware" body parser
app.use(express.json());

/* Defined routes: METHOD, URL PATH */

// method == app.<method>
// path = app.get('/this/is/path', ...)
app.get('/api/singers', (req, res) => {
  const singers = readData();

  // do we have a name query param?
  if(req.query.name) {
    // filter singers that start with name
    const match = req.query.name.toLowerCase();
    const filtered = singers.filter(s => {
      return s.name.toLowerCase().startsWith(match);
    });
    res.json(filtered);
  }
  else {
    // send back all singers
    res.json(singers);
  }
});

app.post('/api/singers', (req, res) => {

  const singers = readData();
  const singer = req.body;
  singer.id = shortid.generate();
  // singer.created = new Date();
  singers.push(singer);
  saveData(singers);

  res.json(singer);
});

/* end defined routes */

/* configure and start the server */
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});

/* end configure and server start */