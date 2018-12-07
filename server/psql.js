// const fs = require('fs');
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/banana';

const client = new Client(databaseUrl);

client.connect();

client.query(`
  SELECT = FROM campgrounds;
`)
  .then(results => {
    console.log(results.rows);
  //     fs.writeFileSync(
  //       'campground.json',
  //       JSON.stringify(results.rows, true, 2)
  //     );
  //   },
  //   err => console.log(err)
  // )
  // .then(() => {
  //   client.end();
  })
  .catch(err => {
    console.log(err);
  });