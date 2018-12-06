const client = require('../db-client');

client.query(`
      CREATE TABLE IF NOT EXISTS animals (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        weight INT,
        mammal BOOLEAN,
        SIZE VARCHAR(256),
        image VARCHAR(256)
      );
    `)
  
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });