const fs = require('fs');
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/synthesizers';

const client = new Client(databaseUrl);

client.connect();

// CREATES SEED DATA
client.query(`
  SELECT name, image, polyphonic, year, id FROM synths;
`)
  .then(
    results => {
      fs.writeFileSync(
        'synths.json', 
        JSON.stringify(results.rows, true, 2)
      );
    },
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });