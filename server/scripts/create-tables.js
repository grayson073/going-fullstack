const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS positives (
    id SERIAL PRIMARY KEY,
    emotion VARCHAR(256) NOT NULL,
    emo_level INTEGER NOT NULL
  );

  CREATE TABLE IF NOT EXISTS emojis (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    image VARCHAR(256),
    goodness BOOLEAN,
    yob INTEGER,
    positives_id INTEGER NOT NULL REFERENCES positives(id)
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });