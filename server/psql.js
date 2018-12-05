const fs = require('fs');

const pg = require('pg');

const Client = pg.Client;

const databaseUrl = 'postgres://localhost:5432/animal';

const client = new Client(databaseUrl);

client.connect();

client.query(`
  SELECT name, weight, mammal, image FROM animals;
`)
  .then(
    results => {
      fs.writeFileSync(
        'animal.json', 
        JSON.stringify(results.rows, true, 2)
      );
    },
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });