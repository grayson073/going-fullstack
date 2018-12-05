const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/singers';
const singers = require('./singers.json');

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    // "Promise all" does a parallel execution of async tasks
    return Promise.all(
      singers.map(singer => {
        return client.query(`
          INSERT INTO singers (name, genre, age, summary)
          VALUES ($1, $2, $3, $4);
        `,
        [singer.name, singer.genre, singer.age, singer.summary]);
      })
    );
  })
  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });