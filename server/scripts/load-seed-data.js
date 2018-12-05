const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/foods';
const superfoods = require('./superfoods.json');

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    // "Promise all" does a parallel execution of async tasks
    return Promise.all(
      superfoods.map(superfood => {
        return client.query(`
          INSERT INTO students (name, benefits, is_anti_inflammatory)
          VALUES ($1, $2, $3);
        `,
        [superfood.name, superfood.benefits, superfood.is_anti_inflammatory]);
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
