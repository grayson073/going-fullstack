const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://shaba:123@localhost:5432/emo';
const emojis = require('./emojis.json');

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return Promise.all(
      emojis.map(emoji => {
        return client.query(`
          INSERT INTO emojis (name, image, goodness, yob)
          VALUES ($1, $2, $3, $4);
        `,
        [emoji.name, emoji.image, emoji.goodness, emoji.yob]);
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