const express = require('express');
const app = express();
const morgan = require('morgan');
const pg = require('pg');

// enhanced logging
app.use(morgan('dev'));

// register the json "middleware" body parser
app.use(express.json());

/* Connect to pg */
const Client = pg.Client;
const dbUrl = 'postgres://localhost:5432/rockstars';
const client = new Client(dbUrl);
client.connect();
/* end connect pg */


/* Defined routes: METHOD, URL PATH */

// method == app.<method>
// path = app.get('/this/is/path', ...)
app.get('/api/singers', (req, res) => {
   
  client.query(`
    SELECT * FROM singers;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/singers/:id', (req, res) => {
  client.query(`
      SELECT * FROM singers WHERE id = $1;
    `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/singers', (req, res) => {
  const body = req.body;

  client.query(`
      INSERT INTO singers (name, genre, age, summary)
      VALUES($1, $2, $3, $4)
      RETURNING id, name, genre, age, summary;
    `,
  [body.name, body.genre, body.age, body.summary])
    .then(result => {
      res.json(result.rows[0]);
    });
});

//WIP delete functionality
app.delete('/api/singers', (req, res) => {
  const body = req.body;

  client.query(`
    DELETE FROM singers
    WHERE id = $1;
  `,
  [body.id]);


});

/* end defined routes */

/* configure and start the server */
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});

/* end configure and server start */