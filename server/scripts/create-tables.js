const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS size (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    short_name VARCHAR(1) NOT NULL
  );


  CREATE TABLE IF NOT EXISTS animals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    weight INT,
    mammal BOOLEAN,
    size_id INTEGER NOT NULL REFERENCES size(id),
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