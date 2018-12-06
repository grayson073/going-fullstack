const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/synthesizers';
const synths = require('./synths.json');

console.log(synths);
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return Promise.all(
      synths.map(synth => {
        return client.query(`
          INSERT INTO synths (name, image, polyphonic, year, id)
          VALUES ($1, $2, $3, $4, $5);
        `,
        [synth.name, synth.image, synth.polyphonic, synth.year, synth.id]);
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