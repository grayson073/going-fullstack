const client = require('../db-client');
const animals = require('./animals.json');

Promise.all(
  animals.map(animal => {
    return client.query(`
      INSERT INTO animals (name, weight, mammal, size, image)
      VALUES ($1, $2, $3, $4, $5);
    `,
    [animal.name, animal.weight, animal.mammal, animal.size, animal.image]);
  })
)
  .then(
    () => console.log('seed data loaded'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });