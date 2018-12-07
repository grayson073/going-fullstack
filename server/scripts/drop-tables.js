const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://shaba:123@localhost:5432/emo';

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      DROP TABLE IF EXISTS emojis;
    `);
  })
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err) 
  )
  .then(() => {
    client.end();
  });