const fs = require('fs');
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/guitarists';

const client = new Client(databaseUrl);

client.connect();

client.query(`
  SELECT name, music_type, yob FROM guitarists;
`)
  .then(
    results => {
      fs.writeFileSync(
        'guitarists.json', 
        JSON.stringify(results.rows, true, 2)
      );
    },
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });