const client = require('../db-client');
const animals = require('./animals.json');
const sizes = require('./sizes');

Promise.all(
  sizes.map(size => {
    return client.query(`
    INSERT INTO size (name, short_name)
    VALUES ($1, $2);
    `,
    [size.name, size.shortName]);
  })
)
  .then(() => {
    return Promise.all(
      animals.map(animal => {
        return client.query(`
          INSERT INTO animals (name, weight, mammal, size_id, image)
          SELECT
            $1 as name,
            $2 as weight,
            $3 as mammal,
            id as size_id,
            $4 as image
          FROM size
          WHERE short_name = $5;
        `,
        [animal.name, animal.weight, animal.mammal, animal.image, animal.size]);
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