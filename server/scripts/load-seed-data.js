const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/films';
const movies = require('./movies.json');
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return Promise.all(
      movies.map(movie => {
        return client.query(`
          INSERT INTO movies (name, year, rating)
          VALUES ($1, $2, $3);
        `,
        [movie.name, movie.year, movie.rating]);
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