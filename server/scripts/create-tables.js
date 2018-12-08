const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS genre (
    id SERIAL PRIMARY KEY,
    category VARCHAR(256) NOT NULL,
    short_name VARCHAR(8) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS game (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    year INTEGER NOT NULL,
    genre_id INTEGER NOT NULL REFERENCES genre(id),
    image_url VARCHAR(256) NOT NULL
  );
`)
  .then(
    () => console.log('Create tables complete...'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });