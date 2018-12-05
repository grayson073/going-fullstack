// const fs = require('fs'); <-- use if building seed file with fs.write below
// "require" pg
const pg = require('pg');
// Use the pg Client
const Client = pg.Client;
// database url
const databaseUrl = 'postgres://localhost:5432/rockstars';
// on windows, linux, or other systems where you need to 
// specify username and password
// const databaseUrl = 'postgres://<username>:<password>@localhost:5432/liveable_cities';

const client = new Client(databaseUrl);

client.connect();

client.query(`
  SELECT name, genre, age, summary FROM singers;
`)
  .then(
    results => {
      console.log(results.rows);
    //   fs.writeFileSync(
    //     'singer.json', 
    //     JSON.stringify(results.rows, true, 2)
    //   );
    },
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });