const express = require('express');
const app = express();
const morgan = require('morgan');
const pg = require('pg');


app.use(morgan('dev'));

// utility that check requests, if body turn into JSON and ready it for us
app.use(express.json());

const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/synthesizers';
const client = new Client(databaseUrl);
client.connect();


app.get('/api/synths', (req, res) => {
  client.query(`
      SELECT name, image, polyphonic, year, id FROM synths;
    `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/synths/:id', (req, res) => {
  client.query(`
    SELECT * FROM synths WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

//TODO: app.del('/api/synths/:id, (req, res) => {
//   similar to get but just a delete sql statement
//    DELETE * FROM synths WHERE id = $1;
// })
// ^ but if in UI and delete, program app to go back to list ???
// TODO: edit - put with an update

app.post('/api/synths', (req, res) => {
  const body = req.body;
  client.query(`
    INSERT INTO synths (name, image, polyphonic, year)
    VALUES ($1, $2, $3, $4)
    RETURNING name, image, polyphonic, year, id;
  `,
  [body.name, body.image, body.polyphonic, body.year])
    .then(result => {
      res.json(result.rows[0]);
    });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});