const client = require('../db-client');
const games = require('./games.json');
const genres = require('./genres-data');

Promise.all(
  genres.map(genre => {
    return client.query(`
      INSERT INTO genre (category, short_name)
      VALUES ($1, $2);
    `,
    [genre.category, genre.shortName]);
  })
)
  .then(() => {
    return Promise.all(
      games.map(game => {
        return client.query(`
          INSERT INTO game (title, year, image_url, genre_id)
          SELECT
            $1 as title,
            $2 as year,
            $3 as image_url,
            id as genre_id
          FROM genre
          WHERE short_name = $4;
        `,
        [game.title, game.year, game.imageUrl, game.genre]);
      })
    );
  })
  .then(
    () => console.log('Seed data load complete...'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });