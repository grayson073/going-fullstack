const pg = require('pg');

const Client = pg.Client;
const dbUrl = 'postgres://localhost:5432/characters';
const client = new Client(dbUrl);
client.connect();

client.query(`
    SELECT * FROM characters;

`)
  .then(results => {
    console.log(results.rows);
  })
  .catch(err => {
    console.log(err);
  });