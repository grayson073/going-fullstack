const pg = require('pg');

const DATABASE_URL = 'postgres://localhost:5432/alchemy_ta';

const Client = pg.Client;

const client = new Client(DATABASE_URL);

client.connect()
  .then(() => console.log('Connected to DB @ ', DATABASE_URL))
  .catch(err => console.error('Connection error: ', err));

client.on('error', err => {
  console.error('\n*** DATABASE ERROR ***\n\n', err);
});

module.exports = client;