const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://shaba:123@localhost:5432/emo';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
			CREATE TABLE IF NOT EXISTS emojis (
				id SERIAL PRIMARY KEY,
				name VARCHAR(256) NOT NULL,
				imag_url VARCHAR(256),
				goodness VARCHAR(256),
				dob DATE
			);
		`);
  })
  .then(
    () => console.log('create tables completed'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });