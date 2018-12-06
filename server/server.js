const express = require('express');
const app = express();
const morgan = require('morgan');
const pg = require('pg');

//morgan logging 
app.use(morgan('dev'));

//use the express framework for this file 
app.use(express.json());

const Client = pg.Client;
const dbUrl = 'postgres://localhost:5432/champions';
const client = new Client(dbUrl);
client.connect();

// start defining the REQUEST and RESPONSE methods
// get all the data and convert it into useable JS text aka from JSON to normal stuff

app.get('/api/data/grapplers', (req, res) => {
    client.query(`
    SELECT id, name, age, champ FROM grapplers;
    `)
        .then(result => {
            res.json(result.rows);
        });
});

app.get('/api/data/grapplers/:id', (req, res) => {
    client.query(` 
    
    SELECT * FROM grapplers WHERE id = $1;`, 
    [req.params.id])
        .then(result => {
            res.json(result.rows[0]);
        });
});

app.post('/api/data/grapplers', (req, res) => {
    const body = req.body;
    client.query (`
    INSERT INTO grapplers (name, age, champ)
    VALUES($1, $2, $3)
    RETURNING id, name, age, champ;`,
    [body.name, body.age, body.champ])
        .then(result => {
            res.json(result.rows[0]);
        });
    //const grappler = req.body;    
});

// set place for port to be used 

const PORT = 3000;

app.listen(PORT, () => {
    console.log('server app started on PORT', PORT);
});
