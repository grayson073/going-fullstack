const pg = require('pg');

const Client = pg.Client;
const dbUrl = 'postgres://localhost:5432/characters';
const client = new Client(dbUrl);
client.connect().then(() => {
  return client.query(`
    DROP TABLE IF EXISTS characters`);
}).then(
  () => console.log('drop tables complete'),
  err => console.log(err)
).then(() => {
  client.end();
});