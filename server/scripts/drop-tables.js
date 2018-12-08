const client = require('../db-client');

client.query(`
  DROP TABLE IF EXISTS game;
  DROP TABLE IF EXISTS genre;
`)
  .then(
    () => console.log('Drop tables complete...'),
    err => console.error(err)
  )
  .then(() => {
    client.end();
  });