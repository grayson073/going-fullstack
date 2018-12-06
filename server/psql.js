const fs = require('fs');
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/movies';

const client = new Client(databaseUrl);

client.connect();

client.query(`
SELECT * FROM movie;
`)
  .then(results => {
    console.log(results.rows);
    fs.writeFileSync(
      'movie.json',
      JSON.stringify(results.rows, true, 2)
    );
  })
  .catch(err => console.log(err)
  )
  .then(() => {
    client.end();
  });