const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS scales (
    id SERIAL PRIMARY KEY,
    short_name VARCHAR(8) NOT NULL,
    scale VARCHAR(256) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS emojis (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    image VARCHAR(256),
    goodness BOOLEAN,
    yob INTEGER,
    scales_id INTEGER NOT NULL REFERENCES scales(id)
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });