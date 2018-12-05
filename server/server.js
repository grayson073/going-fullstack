const express = require('express');
const app = express();
const morgan = require('morgan');
const pg = require('pg');

// const fs = require('fs');

// function readData() {
//   const data = fs.readFileSync('./scripts/animals.json', 'utf8');
//   return JSON.parse(data);
// }

// function saveData(animals) {
//   const json = JSON.stringify(animals, true, 2);
//   fs.writeFileSync('./data/animals.json', json);
// }

app.use(morgan('dev'));

app.use(express.json());

const Client = pg.Client;
const dbUrl = 'postgres://localhost:5432/animal';
const client = new Client(dbUrl);
client.connect();

app.get('/api/animals', (req, res) => {

  client.query(`
    SELECT id, name FROM animals;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.post('/api/animals', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO animals (name, weight, mammal)
    VALUES ($1, $2, $3)
    RETURNING id, name, weight, mammal
  `,
  [body.name, body.weight, body.mammal])
    .then(result => {
      res.json(result.rows[0]);
    });
});
//   const animals = readData();
//   if(req.query.name) {
//     const match = req.query.name.toLowerCase();
//     const filtered = animals.filter(s => {
//       return s.name.toLowerCase().startsWith(match);
//     });
//     res.json(filtered);
//   }
//   else {
//     res.json(animals);
//   }

// });

// app.post('/api/animals', (req, res) => {

//   const animals = readData();
//   const animal = req.body;
//   animal.id = shortid.generate();
//   animals.push(animal);
//   saveData(animals);
  
//   res.json(animal);
// });

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app was started on port', PORT);
});