const client = require('../db-client');
const emojis = require('./emojis.json');
const scales = require('./scales.js');

Promise.all(
  scales.map(scale => {
    return client.query(`
      INSERT INTO scales (short_name, scale)
      VALUES ($1, $2);
    `,
    [scale.shortName, scale.sc]);
  })
)
  .then(() => {
    return Promise.all(
      emojis.map(emoji => {
        return client.query(`
          INSERT INTO emojis (name, image, goodness, yob, scales_id)
          SELECT
            $1 as name,
            $2 as image,
            $3 as goodness,
            $4 as yob,
            id as scales_id
          FROM scales
          WHERE short_name = $5
        `,
        [emoji.name, emoji.image, emoji.goodness, emoji.yob, emoji.sc]);
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