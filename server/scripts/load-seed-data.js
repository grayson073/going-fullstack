const client = require('../db-client');
const emojis = require('./emojis.json');
const positives = require('./positives.js');

Promise.all(
  positives.map(pos => {
    return client.query(`
      INSERT INTO positives (emotion, emo_level)
      VALUES ($1, $2);
    `,
    [pos.emotion, pos.emo_level]);
  })
)
  .then(() => {
    return Promise.all(
      emojis.map(emoji => {
        return client.query(`
          INSERT INTO emojis (name, image, goodness, yob, positives_id)
          VALUES ($1, $2, $3, $4, $5);
        `,
        [emoji.name, emoji.image, emoji.goodness, emoji.yob, ]);
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