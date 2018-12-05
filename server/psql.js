const pg = require('pg');
const Client = pg.Client;
// database URL address 
const databaseUrl = 'postgres://localhost:5432/champions';

const client = new Client(databaseUrl);
client.connect();

// this is grabbing from the TABLE`s Database NOT LOCAL API file
client.query(`
SELECT * FROM grapplers;`)
    .then(results => {
        console.log(results.rows);
    })
    .catch(err => {
        console.log(err);
    });