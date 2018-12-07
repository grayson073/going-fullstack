const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/animal';
const animals = require('./animals.json');

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return Promise.all(
      animals.map(animal => {
        return client.query(`
          INSERT INTO animals (name, weight, mammal, image)
          VALUES ($1, $2, $3, $4);
        `,
        [animal.name, animal.weight, animal.mammal, animal.image]);
      })
    );
  })
  .then(
    () => console.log('seed data loaded'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });