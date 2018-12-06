const express = require('express');
const app = express();
const morgan = require('morgan');
const client = require('./db-client');

app.use(morgan('dev'));

app.use(express.json());

app.get('/api/sizes', (req, res) => {

  client.query(`
    SELECT id, name, short_name as "shortName" 
    FROM size
    ORDER BY name;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/animals', (req, res) => {

  client.query(`
    SELECT 
      animals.id, 
      animals.name as name, 
      animals.weight as weight,
      animals.image as image,
      size.id as "sizeId",
      size.name as size
    FROM animals
    JOIN size
    ON animals.size_id = size.id
    ORDER BY name ASC;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/animals/:id', (req, res) => {
  client.query(`
    SELECT * FROM animals WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/animals', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO animals (name, weight, mammal, size, image)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id, name, weight, mammal, size, image;
  `,
  [body.name, body.weight, body.mammal, body.size, body.image])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.delete('/api/animals/:id', (req, res) => {
  client.query(`
    DELETE FROM animals WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json({ removed:result.rowCount === 1 });
    });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app was started on port', PORT);
});