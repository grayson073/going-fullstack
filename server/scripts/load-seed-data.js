const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/guitarists';
const guitarists = require('../data/guitarists.json');

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return Promise.all(
      guitarists.map(guitarist => {
        return client.query(`
          INSERT INTO guitarists (name, music_type, yob)
          VALUES ($1, $2, $3);
        `,
        [guitarist.name, guitarist.musicType, guitarist.yob]);
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